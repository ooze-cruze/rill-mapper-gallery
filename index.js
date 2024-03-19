const blockchain_rill_mapper = require('blockchain-rill-mapper');
const rill_mapper_gallery = require('rill-mapper-gallery');
const passport = require('passport');
const axios = require('axios');
const socket.io = require('socket.io');
const dotenv = require('dotenv');
const node_sass = require('node-sass');
const supertest = require('supertest');
const redux = require('redux');
const firebase = require('firebase');
const moment = require('moment');
const lodash = require('lodash');
const express = require('express');
const chalk = require('chalk');
const commander = require('commander');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const sinon = require('sinon');
const body_parser = require('body-parser');
const debug = require('debug');
const react_redux = require('react-redux');

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(7));

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});

const http = require('http');
http.get('http://example.com', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

const fs = require('fs');
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(`${err ? 'does not exist' : 'exists'}`);
});

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');