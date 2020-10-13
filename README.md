# candy-contracts

nvm use v9.5.0


Smart-contracts for Cryto Candy platform

- Candy contracts was forked from Spin Protocal
  > https://github.com/spinprotocol/spin-contracts.git

## Deployment - Ethereum

1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_candytoken.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
   `truffle compile`
4. Set mnemonic words for deployer in your command line as follows;
   `export MNEMONICS="<mnemonic_words>"`
5. And set your infura project secret key as follows;
   `export INFURA_API_KEY="<infura_project_secret>"`
6. Also set fund collector address as follows;
   `export FUND_COLLECTOR_ADDRESS="<fund_collector_address>"`
7. Finally deploy the contract on the network you desire
   `NETWORK=<network_name> npm run deploy`

```bash
NETWORK=ropsten truffle compile
NETWORK=ropsten npm run deploy
NETWORK=ropsten truffle deploy --network ropsten  --reset

```

## remix.ethereum.org
https://remix.ethereum.org/#optimize=true&evmVersion=null&version=soljson-v0.4.24+commit.e67f0147.js



## Deploy 인자 

: name , symbol , decimals, initialSupply
: "CRYPTO CANDY" , "CANDY" , 18 , 800000000

## Deployment - Kalytn

1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_candytoken.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
   `truffle compile`
4. Create .secret_baobab or .secret_cypress file and set klaytn private key words

5. Finally deploy the contract on the network you desire
   `truffle migrate --network <network_name>`

## Test

- In order to run the whole tests
  `truffle test`
- In order to run only specific test file

## baobab candy token address

> 0x69f75e30ee83a450b033fd6451fd7993051bb19c

## cypress candy token address

> 0x1f759faa9467edadc531e901b5e49fddc9e6b18b
