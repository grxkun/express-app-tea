// multi-web3.js

const Web3 = require('web3');

// Initialize multiple instances of Web3
const web3Instance1 = new Web3('http://localhost:8545');
const web3Instance2 = new Web3('https://ropsten.infura.io/v3/your_infura_project_id');

// Example usage: get block number from both instances
web3Instance1.eth.getBlockNumber().then(blockNumber1 => {
  console.log('Block number (Instance 1):', blockNumber1);
});

web3Instance2.eth.getBlockNumber().then(blockNumber2 => {
  console.log('Block number (Instance 2):', blockNumber2);
});
