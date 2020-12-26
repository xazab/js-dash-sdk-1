# Working with multiple apps

When working with other registered contracts, you will need to know their `contractId` and reference it on the SDK constructor.

Assuming a contract Xazab and having a following `contractId: "77w8Xqn25HwJhjodrHW133aXhjuTsTv9ozQaYpSHACE3"`. 
You can then pass it as an options.

```js
const client = new Xazab.Client({
  apps: {
    xazab: {
      contractId: '77w8Xqn25HwJhjodrHW133aXhjuTsTv9ozQaYpSHACE3'
    }
  }
});
```

This allow the methods `client.platform.documents.fetch` to provide you field selection. 
Therefore, if the xazab contract have a `profile` field that you wish to access, XazabJS will allow you to do dot-syntax access :

```js
const bobProfile = await client.platform.documents.fetch('xazab.profile', {name:'bob'})
``` 
