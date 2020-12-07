import { Platform } from "../../Platform";
import { wait } from "../../../../../utils/wait";
import createAssetLockTransaction from "../../createAssetLockTransaction";

// We're creating a new transaction every time and the index is always 0
const ASSET_LOCK_OUTPUT_INDEX = 0;

/**
 * Register identities to the platform
 *
 * @param {number} [fundingAmount=10000] - funding amount in duffs
 * @returns {Identity} identity - a register and funded identity
 */
export default async function register(
  this: Platform,
  fundingAmount : number = 10000
): Promise<any> {
    const { client, dpp } = this;

    const account = await client.getWalletAccount();

    const {
        transaction: assetLockTransaction,
        privateKey: assetLockPrivateKey
    } = await createAssetLockTransaction(this, fundingAmount);

    // Broadcast Asset Lock transaction
    await account.broadcastTransaction(assetLockTransaction);

    // Wait some time for propagation
    await wait(1000);

    const identityIndex = await account.getUnusedIdentityIndex();

    // @ts-ignore
    const { privateKey: identityPrivateKey } = account.getIdentityHDKeyByIndex(identityIndex, 0);
    const identityPublicKey = identityPrivateKey.toPublicKey();

    // Create poof that the transaction won't be double spend
    const instantLock = await account.waitForInstantLock(assetLockTransaction.hash);
    // @ts-ignore
    const assetLockProof = await dpp.identity.createInstantAssetLockProof(instantLock);

    // Create Identity
    // @ts-ignore
    const identity = dpp.identity.create(
        assetLockTransaction, ASSET_LOCK_OUTPUT_INDEX, assetLockProof, [identityPublicKey]
    );

    // Create ST
    const identityCreateTransition = dpp.identity.createIdentityCreateTransition(identity);

    identityCreateTransition.signByPrivateKey(assetLockPrivateKey);

    const result = await dpp.stateTransition.validateStructure(identityCreateTransition);

    if (!result.isValid()) {
        throw new Error(`StateTransition is invalid - ${JSON.stringify(result.getErrors())}`);
    }

    // Broadcast ST
    await client.getDAPIClient().platform.broadcastStateTransition(identityCreateTransition.toBuffer());

    account.storage.insertIdentityIdAtIndex(
        account.walletId,
        identity.getId().toString(),
        identityIndex,
    );

    // Wait some time for propagation
    await wait(6000);

    let fetchedIdentity;
    do {
        await wait(1000);

        fetchedIdentity = await this.client.getDAPIClient().platform.getIdentity(identity.getId());
    } while (!fetchedIdentity);

    return identity;
}
