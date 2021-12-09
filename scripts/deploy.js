const hre = require("hardhat");

async function main() {
 
  const Greeter = await hre.ethers.getContractFactory("Greeter"); // reference to the contract that we deploy 
  const greeter = await Greeter.deploy("Hello, Hardhat!"); // constructor string parameter

  await greeter.deployed(); // waiting for the contract to be deployed

  console.log("Greeter deployed to:", greeter.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
