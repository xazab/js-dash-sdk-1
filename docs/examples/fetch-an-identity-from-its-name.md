## Fetching an identity from it's name

Assuming you have created an identity and attached a name to it (see how to [register an identity](https://xazabplatform.readme.io/docs/tutorial-register-an-identity) and how to [attach it to a name](https://xazabplatform.readme.io/docs/tutorial-register-a-name-for-an-identity).   
You will then be able to directly recover an identity from its names. See below: 

```js
const client = new Xazab.Client({
  wallet: {
    mnemonic: '', // Your app mnemonic, which holds the identity
  },
});

// This is the name previously registered in DPNS.
const identityName = 'alice';
client.isReady().then(getIdentity);

async function getIdentity() {
    const {identities, names} = client.platform;
    const identityId = (await names.get(identityName)).data.records.xazabIdentity;
    const identity = await identities.get(identityId);
}
```
