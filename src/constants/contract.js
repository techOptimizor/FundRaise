import { ethers } from "ethers";
import { Info } from ".";

let tempProvider;
let tempSigner;
if (window.ethereum) {
  tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  tempSigner = tempProvider.getSigner();
}

let NFTcontract = new ethers.Contract(Info.address, Info.ABI, tempSigner);
let fundcontract = new ethers.Contract(
  Info.Fundaddress,
  Info.FundAbi,
  tempSigner
);

export async function create() {
  return await NFTcontract.tokenURI(0);
}

export async function balanceOf(address) {
  return await NFTcontract.balanceOf(address);
}

export async function Deposit(metadataURI, name, amount) {
  let tx = await fundcontract.Donate(metadataURI, name, { value: amount });
  let receipt = await tx.wait();
  return receipt;
}

export async function claim(id) {
  let tx = await fundcontract.claim(id);
  let receipt = await tx.wait();
  return receipt;
}

export async function getDonorAmount(address) {
  return await fundcontract.getDonorAmount(address);
}
