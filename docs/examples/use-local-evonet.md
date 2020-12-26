## Use a local evonet

You can refer to https://github.com/xazab/xazab-network-deploy to deploy a devnet locally.   

You will then need to pass the seed ip, and [register the DPNS contract](https://github.com/xazab/dpns-contract), and reference its `contractId` below.

```js
const seeds = [{service: '54.245.133.124'}];
const client = new Xazab.Client({
  seeds,
  apps: {
    dpns: {
      contractId: '77w8Xqn25HwJhjodrHW133aXhjuTsTv9ozQaYpSHACE3'
    }
  }
});
```

After that, usage is the same.
