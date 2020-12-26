## Xazab SDK

[![Package Version](https://img.shields.io/github/package-json/v/xazab/js-xazab-sdk.svg?&style=flat-square)](https://www.npmjs.org/package/xazab)
[![Build Status](https://img.shields.io/travis/com/xazab/js-xazab-sdk.svg?branch=master&style=flat-square)](https://travis-ci.com/xazab/js-xazab-sdk)

> Client-side library for wallet payment/signing and application development with Xazab. (Wallet, DAPI, Primitives, BLS, ...)

---

Xazab SDK is intended to provide, in a single entry-point all the different features, classes & utils you might need to interface with the Xazab network.

## Install

## Browser 

```html
<script src="https://unpkg.com/xazab"></script>
```

## Node

In order to use this library, you will need to add our [NPM package](https://www.npmjs.com/xazab) to your project.

Having [NodeJS](https://nodejs.org/) installed, just type :

```bash
npm install xazab
```

### Usage 

```js
const Xazab = require("xazab");

const client = new Xazab.Client({
  network: "testnet",
  wallet: {
    mnemonic: "arena light cheap control apple buffalo indicate rare motor valid accident isolate",
  },
});

// Accessing an account allow you to transact with the Xazab Network
client.getWalletAccount().then(async (account) => {
  console.log("Funding address", account.getUnusedAddress().address);

  const balance = account.getConfirmedBalance();
  console.log("Confirmed Balance", balance);

  if(balance > 0){
    // Creating an identity is the basis of all interactions with the Xazab Platform
    const identity = await client.platform.identities.register()
    
    // Prepare a new document containing a simple hello world sent to a hypothetical tutorial contract
    const document = await platform.documents.create(
      'tutorialContract.note',
      identity,
      { message: 'Hello World' },
    );

    // Broadcast the document into a new state transition
    await platform.documents.broadcast({create:[document]}, identity);
  }
});
```


### Use-cases examples
- [Generate a mnemonic](/examples/generate-a-new-mnemonic.md) 
- [Receive money and display balance](/examples/receive-money-and-check-balance.md) 
- [Pay to another address](/examples/pay-to-another-address.md) 
- [Use a local evonet](/examples/use-local-evonet.md) 
- [Publishing a new contract](/examples/publishing-a-new-contract.md) 
- [Use another BIP44 account](/examples/use-different-account.md) 
    
### Tutorial
- [Register an identity](https://xazabplatform.readme.io/docs/tutorial-register-an-identity)
- [Register a Name for an Identity](https://xazabplatform.readme.io/docs/tutorial-register-a-name-for-an-identity)
    

## Licence

[MIT](https://github.com/dashevo/dashjs/blob/master/LICENCE.md) © Dash Core Group, Inc.

