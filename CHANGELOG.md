# [3.17.0](https://github.com/xazab/XazabJS/compare/v3.16.1...v3.17.0) (2020-12-30)


### Features

* connect to testnet by default ([#176](https://github.com/xazab/XazabJS/issues/176))
* update `dapi-client`, `xazabcore-lib`, `dpp` and `wallet-lib` ([#152](https://github.com/xazab/XazabJS/issues/152), [#172](https://github.com/xazab/XazabJS/issues/172))
* wait broadcasted data to be available from queries ([#165](https://github.com/xazab/XazabJS/issues/165))
* asset lock proofs for identity funding ([#169](https://github.com/xazab/js-xazab-sdk/issues/169))


### Bug Fixes

* crypto.randomBytes stub causing tests to fail ([#173](https://github.com/xazab/XazabJS/issues/173))


### BREAKING CHANGES

* requires a version of DAPI with instant locks implemented, i.e. 0.17 or higher



## [3.16.1](https://github.com/xazab/XazabJS/compare/v3.16.0...v3.16.1) (2020-10-30)


### Bug Fixes

* `$id` and `$ownerId` are not converted to identifiers ([#148](https://github.com/xazab/XazabJS/issues/148))



# [3.16.0](https://github.com/xazab/XazabJS/compare/v3.15.2...v3.16.0) (2020-10-29)

### Features

* convert string identifiers in `where` conditions ([#145](https://github.com/xazab/XazabJS/issues/145))
* make `broadcast` methods to return a state transition ([#146](https://github.com/xazab/XazabJS/issues/146))
* introduce Identifier type for data contract, document and identity IDs ([#142](https://github.com/xazab/XazabJS/issues/142))


### BREAKING CHANGES

* `client.platform.contracts.broadcast` returns a `DataContractCreateTransition` instead of `DataContract`
* `client.platform.documents.broadcast` returns a `DocuemntsBatchTransition` instead of `Documents[]`
* `client.apps` is an instance of `ClientApps` class. Use `Client#getApps()` to get/update applications



## [3.15.2](https://github.com/xazab/XazabJS/compare/v3.15.1...v3.15.2) (2020-09-14)


### Bug Fixes

* Update wallet-lib to a version with sync process fixes ([#185](https://github.com/xazab/wallet-lib/pull/185))



## [3.15.1](https://github.com/xazab/XazabJS/compare/v3.15.0...v3.15.1) (2020-09-07)


### Bug Fixes

* invalid argument type: script error from xazabcore-lib ([#138](https://github.com/xazab/XazabJS/issues/138))



# [3.15.0](https://github.com/xazab/XazabJS/compare/v3.14.1...v3.15.0) (2020-09-04)


### Features

* update to new Wallet and DPNS contract ([#127](https://github.com/xazab/js-xazab-sdk/pull/127))


### BREAKING CHANGES

* `client.platform.names.register` now receive records as a second argument
* See [DPP breaking changes](https://github.com/xazab/js-dpp/releases/tag/v0.15.0)


## [3.14.1](https://github.com/xazab/XazabJS/compare/v3.14.0...v3.14.1) (2020-07-24)


### Bug Fixes

* outdated DPNS contract ID ([#118](https://github.com/xazab/XazabJS/issues/118))



# [3.14.0](https://github.com/xazab/XazabJS/compare/v3.13.4...v3.14.0) (2020-07-23)


### Features

* implement DPNS methods ([#92](https://github.com/xazab/XazabJS/issues/92))
* TypeScript compilation without webpack ([#97](https://github.com/xazab/XazabJS/issues/97), [#107](https://github.com/xazab/XazabJS/issues/107))
* integrate with new DAPI Client and Wallet transport ([#105](https://github.com/xazab/XazabJS/issues/105), [#110](https://github.com/xazab/XazabJS/issues/110))
* update DPP to 0.14.0 ([#112](https://github.com/xazab/XazabJS/issues/112))
* use test-suite to run platform tests ([#106](https://github.com/xazab/XazabJS/issues/106))


### Documentation

* update documentation and definitions files ([#99]((https://github.com/xazab/XazabJS/issues/99))


### BREAKING CHANGES

* `seeds` option now is an array of DAPI addresses, that can be represented as a string, plan JS object (host, httpPort, grpcPort) or DAPIAddress instance
* see [DPP v0.14 breaking changes](https://github.com/xazab/js-dpp/releases/tag/v0.14.0)
* `client.platform.names.get` method has been removed in favor of `client.platform.names.resolve`



## [3.13.4](https://github.com/xazab/XazabJS/compare/v3.13.3...v3.13.4) (2020-07-01)


### Features

* update Wallet and xazabCore libs ([#95](https://github.com/xazab/XazabJS/issues/95))



## [3.13.3](https://github.com/xazab/XazabJS/compare/v3.13.2...v3.13.3) (2020-06-15)

- **Features:**
    * Updated wallet-lib to [7.13.3](https://github.com/xazab/wallet-lib/blob/master/CHANGELOG.md#7133-2020-06-16)
    * Updated js-dpp to [0.13.1](https://github.com/xazab/js-dpp/blob/master/CHANGELOG.md#0131-2020-06-15)

- **Bug fixes:**
    * fix: wrong assetlock tx fee estimation (#85)
    * fix: generate one-time private key for the asset lock transaction (#86)

## [3.13.2](https://github.com/xazab/XazabJS/compare/v3.13.1...v3.13.2) (2020-06-12)

- **Bug fixes:**
    * more than one identity registration failed ([#83](https://github.com/xazab/XazabJS/issues/83))

## [3.13.1](https://github.com/xazab/XazabJS/compare/v3.13.0...v3.13.1) (2020-05-12)

- **Features:**
    * identity topups ([#71](https://github.com/xazab/XazabJS/pull/71))

# [3.13.0](https://github.com/xazab/XazabJS/compare/v3.0.2...v3.13.0) (2020-05-11)

- **feat:**
  - feat: update wallet lib to 7.1.4 (#80)

# [3.0.2](https://github.com/xazab/XazabJS/compare/v3.0.1...v3.0.2) (2020-05-06)

- **fix**:
  - typescript support (#46)

# [3.0.1](https://github.com/xazab/XazabJS/compare/v3.0.0...v3.0.1) (2020-04-27)

- **fix**:
  - changed dpp.documents (undefined) to dpp.document (#48)

# [3.0.0](https://github.com/xazab/XazabJS/compare/v2.0.0...v3.0.0) (2020-04-24)

- **breaking:**
  - Identity registration will use HDKeys(0) instead 1 (https://github.com/xazab/XazabJS/pull/41/commits/4bbc54d265c679affbd043b03a88f8ed2f1d52fb)
  - contract.broadcast() now returns dataContract (https://github.com/xazab/XazabJS/pull/41/commits/6f7e9225f317525388fb7701619da74b5d76222b#diff-486b5234782255b516fe9c1868c7d3b0R19)
  - identities.broadcast() now return identity (https://github.com/xazab/XazabJS/pull/41/commits/4bbc54d265c679affbd043b03a88f8ed2f1d52fb#diff-27f47e1bd838b3993aed5eaa396a00e5R90)
  - document.broadcast() creation is now performed via passing documents to be created in an array of property create. `{create:[document]}` (https://github.com/xazab/XazabJS/commit/91127d774a339c4204891f5863c91a64d521ddb8#diff-0202b3d53936b94585a8c0cfa0481bccR10)

- **feat**:
  - added replacement of a document. (#41)
  - added deletion of a document (#41)

- **impr**:
  - update to dpp 0.12 (#41)

- **fix**:
  - properly release (throw) catched error (#41)

- **Chore, Docs & Tests:**
  - bumped wallet-lib to 6.1 (#41)

# [2.0.0](https://github.com/xazab/XazabJS/compare/v1.1.2...v2.0.0) (2020-03-27)

- **breaking:**
  - renamed XazabJS namespace to SDK namespace.
  - renamed SDK namespace to Client namespace (XazabJS.SDK -> SDK.Client).
  - moved L1 primitive namespace from `SDK.*` to `SDK.Core.*`.
  - moved L2 primitive namespace from `SDK.*` to `SDK.Platform.*`.
  - exported file for web environment is now `Xazab` instead of `XazabJS`
- **feat**:
  - Sign and verify message (#24)
- **impr**:
  - Typings documentation (#30)
  - Code cleanup (#31)
  - Export all Xazabcore Primitives (under `SDK.Core.*`)
- **fix**:
  - fix(contracts): pass data contract without array (#32 in #31)
  - fix: remove .serialize() before broadcasting records (#e047d515a12d0d14ff69b4fe3ea5b8b10bd6f890)
  - Identity/register: updated getUTXOS usages on (#afda5bbafb940b2e15d5e773d0e8fc5fbc48ee13)
  - fix(StateTransitionBuilder): records type detection (#b49f74b4b8e03e9d1020dd789c62f4310a4fc1ad)
  - broadcasting of contracts (#f4b63e6be692841f1b138e5b058e531a0873f456, #4aa31fec0e5579d7ef8b9222576863a069b95fd3)
- **chore**:
  - updated for new evonet (updated wallet-lib to 6.0.0)
  -  updated dapi-client to 0.11 (#fba4d55d3281bec5e65605787dd23a6ca3517476)
  - updated DPNS contractID on evonet (#d0cf11d30cf7c9aaef1ffa4a2b8a955fbf5b1184)
