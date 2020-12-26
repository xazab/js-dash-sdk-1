## Transaction 

The Transaction primitive allows easy creation and manipulation of transactions. It also allows signing when provided with a privatekey.  
Supports fee control and input/output access (which allows passing a specific script).
```js
import { Transaction } from 'xazab';
const tx = new Transaction(txProps)
```

Access the [Transaction documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/transaction.md)

## Address

Standardized representation of a Xazab Address. Address can be instantiated from a String, PrivateKey, PublicKey, HDPrivateKey or HdPublicKey.  
Pay-to-script-hash (P2SH) multi-signature addresses from an array of PublicKeys are also supported.  

```js
import { Address } from 'xazab';
```

Access the [Address documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/address.md)

## Block

Given a hexadecimal string representation of the block as input, the Block class allows you to have a deserialized representation of a Block or its header. It also allows validating the transactions in the block against the header merkle root.

Transactions of the block can also be explored by iterating over elements in array (`block.transactions`).  

`import { Block } from 'xazab'`

Access the [Block documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/block.md)

## UnspentOutput

Representation of an UnspentOutput (also called UTXO as in Unspent Transaction Output).  
Mostly useful in association with a Transaction and for Scripts. 

`import { UnspentOutput } from 'xazab'`

Access the [UnspentOutput documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/unspentoutput.md)

## HDPublicKey

Hierarchical Deterministic (HD) version of the PublicKey.  
Used internally by Wallet-lib and for exchange between peers (Xazab)

`import { HDPublicKey } from 'xazab'`

Access the [HDKeys documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/hierarchical.md)

## HDPrivateKey

Hierarchical Deterministic (HD) version of the PrivateKey.  
Used internally by Wallet-lib.

`import { HDPrivateKey } from 'xazab'`

Access the [HDKeys documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/hierarchical.md)

## PublicKey

`import { PublicKey } from 'xazab'`

Access the [PublicKey documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/publickey.md)

## PrivateKey

`import { PrivateKey } from 'xazab'`

Access the [PrivateKey documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/privatekey.md)

## Mnemonic

Implementation of [BIP39 Mnemonic code for generative deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).  
Allow to generate random mnemonic on the language set needed, validate a mnemonic or get the HDPrivateKey associated.  

`import { Mnemonic } from 'xazab'`

Access the [Mnemonic documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/mnemonic.md)

## Network

A representation of the internal parameters relative to the network used. By default, all primitives works with 'livenet', this class allow to have an testnet instance to used on the other primitives (such as Addresses), or for Wallet-lib.

`import { Network } from 'xazab'`


Access the [Network documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/networks.md)

## Script

In Xazab, transaction have in their inputs and outputs some script, very simple programming language with a stack-based evaluation and which is not Turing Complete.
A valid Transaction is a transaction which output script are evaluated as valid.  

Some operations of this language, such as OP_RETURN has been used to store hashes and B64 data on the payment chain.  
Learn more on our walkthrough [Transaction script manipulation with the OP_RETURN example](/docs/walkthroughs/op_return/or_return.md)

`import { Script } from 'xazab'`

Access the [Script documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/script.md)


## Input

`import { Input } from 'xazab'`

Access the [Transaction documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/transaction.md)


## Output

`import { Output } from 'xazab'`

Access the [Transaction documentation on xazab/xazabcore-lib](https://github.com/xazab/xazabcore-lib/blob/master/docs/transaction.md)
