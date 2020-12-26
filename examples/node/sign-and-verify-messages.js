const Xazab = require('xazab');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: null,
  },
};

const client = new Xazab.Client(clientOpts);

const message = new Xazab.Core.Message('hello, world');

const signAndVerify = async function () {
  const {account, wallet} = client;

  const mnemonic = wallet.exportWallet();
  console.log('Mnemonic:', mnemonic);

  const idKey = account.getIdentityHDKey()
  const idPrivateKey = idKey.privateKey;
  const idAddress = idPrivateKey.toAddress().toString()

  const signed = account.sign(message, idPrivateKey);
  const verify = message.verify(idAddress, signed.toString());
  console.log(verify);
};
client.isReady().then(signAndVerify);

