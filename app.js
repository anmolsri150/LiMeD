const IPFS = require("ipfs-core");
const NFTStorage = require("nft.storage");
require('dotenv').config()
 
async function basicIPFS() {
  const ipfs = await IPFS.create();
  const { cid } = await ipfs.add(JSON.stringify({
    "name": "samarth"
  }));
  console.info(cid);
}
async function nftStorage() {
  try{
    const API_TOKEN = process.env.API_TOKEN;
    console.log(API_TOKEN);
  const obj={ "token": API_TOKEN.toString() }
  const client = new NFTStorage.NFTStorage(obj)
  
  const cid = await client.storeDirectory([
    new NFTStorage.File(['hello world'], 'patient.json'),
    new NFTStorage.File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
  ])
    
  }catch(err){
    console.log("err")
    basicIPFS()
  }
  
}
nftStorage();
//basicIPFS();
