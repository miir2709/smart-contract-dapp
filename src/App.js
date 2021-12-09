import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function App() {
  const [ greeting, setGreetingValue ] = useState(''); // state and setter for greeting which the user can toggle with 

  // will wait for some value, hence async
  async function requestAccount(){ // connect to MetaMask for transactions
    // prompt the user to conenct the metamask account and request all user's account info 
    await window.ethereum.request({ method : 'eth_requestAccounts' });
  }

  async function fetchGreeting(){
    if(typeof window.ethereum !== 'undefined'){ // check if MetaMask extension is connected
      const provider = new ethers.providers.Web3Provider(window.ethereum); // create a provider (MetaMask)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider); 
      try{
        const data = await contract.greet(); // calling the greet() method from the Greeting contract
        console.log(data);
      }catch(err){
        console.log(err);
      }
    }
  }

  async function setGreeting(){
    if(!greeting) return; // do not set an empty greeting
    if(typeof window.ethereum !== 'undefined'){ 
      await requestAccount(); // wait for the user to enable/connect the account
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transcation = await contract.setGreeting(greeting); // call the solidity method
      setGreetingValue('') 
      await transcation.wait(); // wait for the transaction to be confirmed on the blockchain
      fetchGreeting(); // log value
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greetings</button>
        <button onClick={setGreeting}>Set Greetings</button> 
        <input 
          onChange={e => setGreetingValue(e.target.value)} // changing the state, which will cause the app component to rerender
          placeholder="Set greeting"
          value={greeting}
        />
      </header>
    </div>
  );
}

export default App;
