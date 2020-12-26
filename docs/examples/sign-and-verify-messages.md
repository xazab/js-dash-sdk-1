## Sign and verify messages

Xazab SDK exports the Message constructor inside the Core namespace `new Xazab.Core.Message`.   

You can refer to its documentation : https://github.com/xazab/xazabcore-message/blob/master/README.md

```js
const pk = new Xazab.Core.PrivateKey();
const message = new Xazab.Core.Message('hello, world');
const signed = account.sign(message, pk);
const verify = message.verify(pk.toAddress().toString(), signed.toString());
```

See [code snippet](https://github.com/xazab/js-xazab-sdk/blob/master/examples/node/sign-and-verify-messages.js).
