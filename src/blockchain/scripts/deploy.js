const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  const ARMY = await ethers.getContractFactory("ARMY");
  const army = await ARMY.deploy();

  await army.deployed();

  console.log("Contract ARMY deployed to:", army.address);

  const data = {
    address: army.address,
    abi: JSON.parse(army.interface.format('json'))
  };
  fs.writeFileSync('./contractInfo.json', JSON.stringify(data));
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});