const { expect } = require('chai');

const Identifier = require('@xazab/dpp/lib/Identifier');

const {
  Networks,
} = require('@xazab/xazabcore-lib');

const Xazab = require(typeof process === 'undefined' ? '../../src/index.ts' : '../../');

describe('SDK', function suite() {
  this.timeout(700000);

  let account;
  let dpnsContractId;
  let clientInstance;

  beforeEach(async () => {
    dpnsContractId = Identifier.from(process.env.DPNS_CONTRACT_ID);

    const clientOpts = {
      seeds: process.env.DAPI_SEED.split(','),
      network: process.env.NETWORK,
      wallet: {
        mnemonic: null,
      },
      apps: {
        dpns: {
          contractId: dpnsContractId,
        }
      }
    };

    clientInstance = new Xazab.Client(clientOpts);
  });

  it('should init a Client', async () => {
    expect(clientInstance.network).to.equal(process.env.NETWORK);

    expect(clientInstance.walletAccountIndex).to.equal(0);

    expect(clientInstance.getApps().has('dpns')).to.be.true;
    expect(clientInstance.getApps().get('dpns')).to.deep.equal({
      contractId: dpnsContractId,
    });

    const network = Networks.get(process.env.NETWORK).name;
    expect(clientInstance.wallet.network).to.equal(network);

    expect(clientInstance.wallet.offlineMode).to.equal(false);

    expect(clientInstance.platform.dpp).to.exist;

    expect(clientInstance.platform.client).to.exist;
  });

  it('should initiate Wallet account', async () => {
    account = await clientInstance.getWalletAccount();

    expect(account.index).to.equal(0);
  })

  it('should sign and verify a message', async function () {
    const idKey = account.getIdentityHDKeyByIndex(0, 0);
    // This transforms from a Wallet-Lib.PrivateKey to a Xazabcore-lib.PrivateKey.
    // It will quickly be annoying to perform this, and we therefore need to find a better solution for that.
    const privateKey = Xazab.Core.PrivateKey(idKey.privateKey);
    const message = Xazab.Core.Message('hello, world');
    const signed = message.sign(privateKey);
    const verify = message.verify(idKey.privateKey.toAddress().toString(), signed.toString());
    expect(verify).to.equal(true);
  });

  it('should disconnect', async function () {
    await clientInstance.disconnect();
  });
});
