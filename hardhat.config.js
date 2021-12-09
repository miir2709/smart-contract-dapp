require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts: './src/artifacts', // hardhat will convert compiled solidity code into ABI and store in the artifacts
  },
  networks:{
    hardhat:{ // localnetwork
      chainId:1337 
    },
    ropsten:{
      url:"https://mainnet.infura.io/v3/d4b1c9d1ab1f41c1ad60c1c88e9a77cc",
      accounts:['0x78888720de166acd562203c6bb564ba854811f0fa8a1448a21bdf32c3d391191']
    }
  },

};
