import axios from "axios";

// Test URL
const origin = "http://20.214.190.113:5050";
const getNftsURL = origin + "/test/nfts";
const getNftOneURL = origin + "/test/nfts/"
const getNftsURLv2 = origin + "/testv2/nfts";
const getNftOneURLv2 = origin + "/testv2/nfts/"

// Test API Request
export const getNfts = async()=>{
    const nfts = await axios.get(getNftsURL)
    .then(res=>res.data.result)
    .catch(console.log);
    return nfts;
}

export const getNftOne = async (id)=>{
    const requestURL = getNftOneURL + id;
    const nft = await axios.get(requestURL)
    .then(res=>res.data.result)
    .catch(console.log);
    return nft
}

export const getNftsv2 = async()=>{
    const nfts = await axios.get(getNftsURLv2)
    .then(res=>res.data)
    .catch(console.log);
    return nfts;
}

export const getNftOnev2 = async(id)=>{
    const requestURL = getNftOneURLv2 + id;
    const nfts = await axios.get(requestURL)
    .then(res=>res.data.result)
    .catch(console.log);
    return nfts;
}