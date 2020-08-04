// const HDWalletProvider = require('truffle-hdwallet-provider');
// const providerFactory4Ethereum = network => new HDWalletProvider(
//   process.env.MNEMONICS || '',                                  // Mnemonic of the deployer
//   `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`  // Provider URL => web3.HttpProvider
// );

const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const fs = require("fs");
const privateKey = fs
  .readFileSync(".secret_" + process.env.NETWORK)
  .toString()
  .trim();
// const mnemonic = fs.readFileSync(".secret").toString().trim();

// NETWORK=baobab npm run deploy
// truffle deploy --network baobab --reset

// NETWORK=cypress npm run deploy
// truffle deploy --network cypress --reset

module.exports = {
  networks: {
    /**
     * Ethereum Network
     */
    // 'mainnet': {
    //   provider: providerFactory4Ethereum('mainnet'),
    //   network_id: 1,
    //   gas: 7000000,
    //   gasPrice: 50000000000 // 100 Gwei, Change this value according to price average of the deployment time
    // },
    // 'ropsten': {
    //   provider: providerFactory4Ethereum('ropsten'),
    //   network_id: 3,
    //   gas: 6000000,
    //   gasPrice: 50000000000 // 50 Gwei
    // },
    // 'rinkeby': {
    //   provider: providerFactory4Ethereum('rinkeby'),
    //   network_id: 4,
    //   gas: 6000000,
    //   gasPrice: 50000000000 // 50 Gwei
    // },
    // 'kovan': {
    //   provider: providerFactory4Ethereum('kovan'),
    //   network_id: 42,
    //   gas: 6000000,
    //   gasPrice: 50000000000  // 50 Gwei
    // },

    /**
     * Klaytn Network
     */
    baobab: {
      provider: () =>
        new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),
      network_id: "1001", // Klaytn baobab 테스트넷의 네트워크 ID
      gas: "8500000",
      gasPrice: null,
    },
    cypress: {
      provider: () =>
        new HDWalletProvider(privateKey, "https://api.cypress.klaytn.net:8651"),
      network_id: "8217", //Klaytn 메인넷의 네트워크 ID
      gas: "8500000",
      gasPrice: null,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  mocha: {
    useColors: true,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 21,
    },
  },
};
