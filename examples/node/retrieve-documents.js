const Xazab = require('xazab');

const clientOpts = {
  network: 'testnet'
};
const client = new Xazab.Client(clientOpts);

const getDocuments = async function () {
  let platform = client.platform;
  await client.isReady();

  const queryOpts = {
    where: [
       ['normalizedLabel', 'startsWith', 'd'],
       ['normalizedParentDomainName', '==', 'xazab'],
   ],
  };

  const documents = await platform.documents.get('dpns.domain', queryOpts);
  console.dir({documents},{depth:5});
};
getDocuments();
