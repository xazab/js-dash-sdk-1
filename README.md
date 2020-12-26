# Xazab SDK

[![NPM Version](https://img.shields.io/npm/v/xazab)](https://www.npmjs.org/package/xazab)
[![Build Status](https://img.shields.io/travis/com/xazab/js-xazab-sdk)](https://travis-ci.com/xazab/js-xazab-sdk)
[![Release Date](https://img.shields.io/github/release-date/xazab/js-xazab-sdk)](https://github.com/xazab/js-xazab-sdk/releases/latest)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen)](https://github.com/RichardLitt/standard-readme)

Xazab library for JavaScript/TypeScript ecosystem (Wallet, DAPI, Primitives, BLS, ...)

Xazab library allows you to connect to DAPI and receive or broadcast payments on the Xazab Network, manage identifies, register data contracts, retrieve or submit documents on the Xazab Platform, all within a single library.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Install

### ES5/ES6 via NPM

In order to use this library, you will need to add it to your project as a dependency.

Having [NodeJS](https://nodejs.org/) installed, just type : `npm install xazab` in your terminal.

```sh
npm install xazab
```


### CDN Standalone

For browser usage, you can also directly rely on unpkg : 

```
<script src="https://unpkg.com/xazab"></script>
```

## Usage

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

## Dependencies 

The Xazab SDK works using multiple dependencies that might interest you:
- [Wallet-Lib](https://github.com/xazab/wallet-lib) - Wallet management for handling, signing and broadcasting transactions (BIP-44 HD).
- [Xazabcore-Lib](https://github.com/xazab/xazabcore-lib) - Provides the main L1 blockchain primitives (Block, Transaction,...).
- [DAPI-Client](https://github.com/xazab/dapi-client) - Client library for accessing DAPI endpoints.
- [DPP](https://github.com/xazab/js-dpp) - Implementation (JS) of Xazab Platform Protocol.

Some features might be more extensive in those libs, as Xazab SDK only wraps around them to provide a single interface that is easy to use (and thus has less features).

## Documentation

More extensive documentation available at https://xazab.github.io/js-xazab-sdk/.

## Contributing

Feel free to dive in! [Open an issue](https://github.com/xazab/js-xazab-sdk/issues/new/choose) or submit PRs.

## License

[MIT](/LICENSE) © Dash Core Group, Inc.
