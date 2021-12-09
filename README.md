1. Compile the solidity smart contract using Hardhat.
Hardhat is the configuration boilerplate ethereum development environment. 
When we compile our smart contracts using hardhat, it converts the code into ABI and additional artifcats, which can be used inside the React app. 

Compiling the .sol code using `npx hardhat compile` creates an artifact folder in the src directory, with a Greater.json file in the contracts folder. 
This specifies the abi properties. This will be imported in the front end application.

2. Deploying using a script from the React Project. ( in scripts folder )
Intially, to test the configuration, deploy the contract on the test network provided by HardHat, using `npx hardhat node`
This creates a local test network and gives 20 accounts to work with.

`npx hardhat run scripts/deploy.js --network localhost` to deploy the contract on localhost. 
`npx hardhat run scripts/deploy.js --network ropsten` to deploy the contract on ropsten test network.
