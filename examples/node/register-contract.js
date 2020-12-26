const XazabJS = require('xazab');

const sdkOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'your mnemonic here',
  },
};
const sdk = new XazabJS.Client(sdkOpts);

const registerContract = async function () {
  await sdk.isReady();
  let platform = sdk.platform;
  const identity = await platform.identities.get('your identity id here');

  const contractDocuments = {
    note: {
      properties: {
        message: {
          type: "string"
        }
      },
      indices: [
        { "message": "asc"}
      ],
      additionalProperties: false
    }};

  const contract = await platform.contracts.create(contractDocuments, identity);
  await platform.dpp.dataContract.validate(contract)
  await platform.contracts.broadcast(contract, identity);
};

registerContract();
