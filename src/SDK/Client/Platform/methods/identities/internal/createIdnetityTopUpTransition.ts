import { PrivateKey, Transaction } from "@xazab/xazabcore-lib";
import { Platform } from "../../../Platform";

/**
 * Creates a funding transaction for the platform identity and returns one-time key to sign the state transition
 * @param {Platform} platform
 * @param {Transaction} assetLockTransaction
 * @param {number} assetLockOutputIndex - index of the funding output in the asset lock transaction
 * @param {AssetLockProof} assetLockProof - asset lock transaction proof for the identity create transition
 * @param {PrivateKey} assetLockPrivateKey - private key used in asset lock
 * @param {string|Buffer|Identifier} identityId
 * @return {{identity: Identity, identityCreateTransition: IdentityCreateTransition}} - identity, state transition and index of the key used to create it
 * that can be used to sign registration/top-up state transition
 */
export default async function createIdentityTopUpTransition(platform : Platform, assetLockTransaction: Transaction, assetLockOutputIndex: number, assetLockProof: any, assetLockPrivateKey: PrivateKey, identityId: any): Promise<any> {
    const { dpp } = platform;

    // @ts-ignore
    const identityTopUpTransition = dpp.identity.createIdentityTopUpTransition(
        identityId, assetLockTransaction, assetLockOutputIndex, assetLockProof
    );

    identityTopUpTransition.signByPrivateKey(assetLockPrivateKey);

    const result = await dpp.stateTransition.validateStructure(identityTopUpTransition);

    if (!result.isValid()) {
        throw new Error(`StateTransition is invalid - ${JSON.stringify(result.getErrors())}`);
    }

    return identityTopUpTransition;
}
