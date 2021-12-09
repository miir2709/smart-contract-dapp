//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    // this will be instantiated by passing a string from the front end
    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    // public means this fn can be read from outside this contract 
    // view means this fn cannot have any state changes - not writing but reading to the blockchain
    function greet() public view returns (string memory) {
        return greeting;
    }

    // this function call will require a transaction fee to publish greeting on the blockchain
    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
