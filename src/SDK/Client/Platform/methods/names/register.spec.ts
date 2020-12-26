import { expect } from 'chai';
import { ImportMock } from 'ts-mock-imports';
import generateRandomIdentifier from "@xazab/dpp/lib/test/utils/generateRandomIdentifier"

import cryptoModule from 'crypto';

import register from './register';
import {ClientApps} from "../../../ClientApps";

describe('Platform', () => {
    let randomBytesMock;

    before(() => {
        randomBytesMock = ImportMock.mockFunction(cryptoModule, 'randomBytes', Buffer.alloc(32));
    });
    after(() => {
        randomBytesMock.restore();
    });

    describe('Names', () => {
        describe('#register', () => {
            let platformMock;
            let identityMock;

            beforeEach(async function beforeEach() {
                platformMock = {
                    client: {
                        getApps() {
                            return new ClientApps({
                                dpns: {
                                    contractId: generateRandomIdentifier(),
                                }
                            });
                        }
                    },
                    documents: {
                        create: this.sinon.stub(),
                        broadcast: this.sinon.stub(),
                    },
                };

                identityMock = {
                    getId: this.sinon.stub(),
                    getPublicKeyById: this.sinon.stub(),
                };
            });

            it('register top level domain', async () => {
                const identityId = generateRandomIdentifier();
                identityMock.getId.returns(identityId);

                await register.call(platformMock, 'Xazab', {
                    xazabUniqueIdentityId: identityId,
                }, identityMock);

                expect(platformMock.documents.create.getCall(0).args[0]).to.deep.equal('dpns.preorder');
                expect(platformMock.documents.create.getCall(0).args[1]).to.deep.equal(identityMock);
                expect(platformMock.documents.create.getCall(0).args[2].saltedDomainHash.toString('hex')).to.deep.equal(
                    'df46c47179745ea18c0fdc95910372dca8810127acc9afe3c9b326b07555e6b4',
                );

                expect(platformMock.documents.create.getCall(1).args).to.have.deep.members([
                    'dpns.domain',
                    identityMock,
                    {
                        'label': 'Xazab',
                        'normalizedLabel': 'xazab',
                        'normalizedParentDomainName': '',
                        'preorderSalt': Buffer.alloc(32),
                        'records': {
                            'xazabUniqueIdentityId': identityId,
                        },
                        'subdomainRules': {
                            'allowSubdomains': true,
                        },
                    }
                ]);
            });

            it('should register second level domain', async () => {
                const identityId = generateRandomIdentifier();
                identityMock.getId.returns(identityId);

                await register.call(platformMock, 'User.xazab', {
                    xazabAliasIdentityId: identityId,
                }, identityMock);

                expect(platformMock.documents.create.getCall(0).args[0]).to.deep.equal('dpns.preorder');
                expect(platformMock.documents.create.getCall(0).args[1]).to.deep.equal(identityMock);
                expect(platformMock.documents.create.getCall(0).args[2].saltedDomainHash.toString('hex')).to.deep.equal(
                    '04a52b75ca842ee9fb14f2cdd27aa0982b9b2cfb2c0e95f640ca3f0c24f1bb9a',
                );

                expect(platformMock.documents.create.getCall(1).args).to.have.deep.members([
                    'dpns.domain',
                    identityMock,
                    {
                        'label': 'User',
                        'normalizedLabel': 'user',
                        'normalizedParentDomainName': 'xazab',
                        'preorderSalt': Buffer.alloc(32),
                        'records': {
                            'xazabAliasIdentityId': identityId,
                        },
                        'subdomainRules': {
                            'allowSubdomains': false,
                        },
                    }
                ]);
            });

            it('should fail if DPNS app have no contract set up', async () => {
                delete platformMock.client.getApps().get('dpns').contractId;

                try {
                    await register.call(platformMock, 'user.xazab', {
                        xazabUniqueIdentityId: generateRandomIdentifier(),
                    }, identityMock);
                } catch (e) {
                    expect(e.message).to.equal('DPNS is required to register a new name.');
                }
            });
        });
    });
});
