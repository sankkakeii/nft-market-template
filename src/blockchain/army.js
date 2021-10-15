import { ethers } from "ethers";

const data = require("./artifacts/contracts/ARMY.sol/ARMY.json");
const instance = new ethers.Contract(data.abi, "0x5FbDB2315678afecb367f032d93F642f64180aa3");

export default instance;