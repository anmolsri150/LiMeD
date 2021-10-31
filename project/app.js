const IPFS = require("ipfs-core");
const NFTStorage = require("nft.storage");
require("dotenv").config();

async function basicIPFS() {
  const ipfs = await IPFS.create();
  const { cid } = await ipfs.add(
    JSON.stringify({
      name: "samarth",
    })
  );
  console.info(cid);
}
async function nftStorage() {
  try {
    const API_TOKEN = process.env.API_TOKEN;
    console.log(API_TOKEN);
    const obj = { token: API_TOKEN.toString() };
    const client = new NFTStorage.NFTStorage(obj);

    const cid = await client.storeDirectory([
      new NFTStorage.File(["hello world"], "patient.json"),
      new NFTStorage.File(
        [JSON.stringify({ from: "incognito" }, null, 2)],
        "metadata.json"
      ),
    ]);
    var spawn = require("child_process").spawn;
    var process = spawn("python", ["./nucypher/nucypher.py", cid]);
    process.stdout.on("data", function (data) {
      console.log(data);
    });

    //
  } catch (err) {
    console.log("err");
    basicIPFS();
  }
}

async function pinTokenData(tokenId) {
  const { metadata, metadataURI } = await this.getNFTMetadata(tokenId);
  const { image: assetURI } = metadata;

  console.log(`Pinning asset data (${assetURI}) for token id ${tokenId}....`);
  await this.pin(assetURI);

  console.log(`Pinning metadata (${metadataURI}) for token id ${tokenId}...`);
  await this.pin(metadataURI);

  return { assetURI, metadataURI };
}
async function pin(cidOrURI) {
  const cid = extractCID(cidOrURI);

  await this._configurePinningService();

  const pinned = await this.isPinned(cid);
  if (pinned) {
    return;
  }

  await this.ipfs.pin.remote.add(cid, { service: config.pinningService.name });
}

async function createNFTFromAssetData(content, options) {
  const filePath = options.path;
  const basename = path.basename(filePath);

  const ipfsPath = "/nft/" + basename;
  const { cid: assetCid } = await this.ipfs.add({ path: ipfsPath, content });

  const assetURI = ensureIpfsUriPrefix(assetCid) + "/" + basename;
  const metadata = await this.makeNFTMetadata(assetURI, options);

  const { cid: metadataCid } = await this.ipfs.add({
    path: "/nft/metadata.json",
    content: JSON.stringify(metadata),
  });
  const metadataURI = ensureIpfsUriPrefix(metadataCid) + "/metadata.json";

  let ownerAddress = options.owner;
  if (!ownerAddress) {
    ownerAddress = await this.defaultOwnerAddress();
  }

  const tokenId = await this.mintToken(ownerAddress, metadataURI);

  return {
    tokenId,
    metadata,
    assetURI,
    metadataURI,
    assetGatewayURL: makeGatewayURL(assetURI),
    metadataGatewayURL: makeGatewayURL(metadataURI),
  };
}
nftStorage();
//basicIPFS();
