# Quick start

In order to use this library, you will need to add our [NPM package](https://www.npmjs.com/xazab) to your project.

Having [NodeJS](https://nodejs.org/) installed, just type :

```bash
npm install xazab
```
## Initialization

Let's create a Xazab SDK client instance specifying both our mnemonic and the schema we wish to work with.

```js
const Xazab = require("../src");
const opts = {
  network: 'testnet',
  apps: {
    xazab: {
      contractId:1234,
      schema: require('schema.json')
    },
  },
  wallet: {
    mnemonic: "arena light cheap control apple buffalo indicate rare motor valid accident isolate",
  },
};
const client = new Xazab.Client(opts);
client.isReady().then(()=>{
    const {account} = client;
    // Do something
 });
```

Quick note :
- If no mnemonic is provided, the subinstance `client.Wallet` will not be initiated (write function for platforms won't be usable).

If you do not have any mnemonic, you can pass `null` to get one generated or omit that parameter to only use Xazab.Client in `read-only`.  


## Make a payment

```js
client.isReady().then(()=>{
     const {account} = client;

    account
      .createTransaction({
        recipient:{address:'yLptqWxjgTxtwKJuLHoGY222NnoeqYuN8h', amount:0.12}
      })
      .then(account.broadcastTransaction);
  });
```

## Read a document 

At time of writing, you will need to have registered xazab yourself, see on [publishing a new contract](/examples/publishing-a-new-contract.md).

```js
client.isReady().then(async ()=>{
    const {account} = client;
    const bobProfile = await account.platform.documents.fetch('xazab.profile', {name:'bob'})
  });
```
