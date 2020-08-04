const CandyToken = artifacts.require("./CandyToken.sol");
const CandyCrowdsale = artifacts.require("./CandyCrowdsale.sol");
const CandyAirdrop = artifacts.require("./CandyAirdrop.sol");

const name = "CRYPTO CANDY";
const symbol = "CANDY";
const decimals = 18;
const initialSupply = 800000000; // 9??

// TODO: Change this parameters in mainnet deployment
const rate = 21935; // 1 ETH = 21,935.9375 CANDY token
const totalSaleCap = 2279 * Math.pow(10, 18); // 2,279.36463 ETH
const wallet = process.env.FUND_COLLECTOR_ADDRESS;

/************* CANDY Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/0x???
const CANDY_TOKEN_ADDRESS_MAINNET =
  "0x4a756027896dc382f0b5e24f22310c27ef39feaa";

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/token/0xd97243b693c3173b165e975fc0bc1590e6acee15
const CANDY_TOKEN_ADDRESS_RINKEBY =
  "0x975fc0bc1590e6acee15d97243b693c3173b165e";

// Mainnet - Klaytn
// @see https://baobab.klaytnscope.com/account/0x
const CANDY_TOKEN_ADDRESS_CYPRESS =
  "0x1f759faa9467edadc531e901b5e49fddc9e6b18b";

// Baobab - Klaytn
// @see https://baobab.klaytnscope.com/account/0xe0e047204b6cf09ca49f8b318053cc81c996bf53
const CANDY_TOKEN_ADDRESS_BAOBAB = "0xe0e047204b6cf09ca49f8b318053cc81c996bf53";
// before: 0x91d47fe9c5d892851060d6db6b31d264bb8a4d1b

// Deployer
const TokenContractDeployer = (deployer, network) => {
  if (
    network === "ropsten" ||
    network === "baobab" || // TestNet
    network === "mainnet" ||
    network === "cypress"
  ) {
    // MainNet
    deployer
      .deploy(CandyToken, name, symbol, decimals, initialSupply)
      .then((_) =>
        console.log(
          "CANDY Token contract has been deployed successfully. CandyToken.address =" +
            CandyToken.address
        )
      );
  } else {
    throw new Error("Unknown network!");
  }
};

/*************************************************************/

/************* CANDY Crowdsale deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/0x
// const CANDY_CROWDSALE_ADDRESS = '';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/0xb0eb24ce9b029a9e771a7878c7983e1d06f5895d
// const CANDY_CROWDSALE_ADDRESS = '0xe9b029a9e771a7878c7983e1d06f5895db0eb24c';

// Baobab - Klaytn
// const CANDY_CROWDSALE_ADDRESS = '0x69f75e30ee83a450b033fd6451fd7993051bb19c';

// Deployer
const SaleContractDeployer = (deployer, network) => {
  deployer
    .deploy(
      CandyCrowdsale,
      rate,
      wallet,
      getTokenAddress(network),
      totalSaleCap
    )
    .then((_) =>
      console.log(
        `CANDY Crowdsale contract has been deployed successfully on ${network}.`
      )
    );
};

function getTokenAddress(network) {
  switch (network) {
    case "mainnet":
      return CANDY_TOKEN_ADDRESS_MAINNET;
    case "ropsten":
      return CANDY_TOKEN_ADDRESS_ROPSTEN;
    case "baobab":
      return CANDY_TOKEN_ADDRESS_BAOBAB;
    case "cypress":
      return CANDY_TOKEN_ADDRESS_CYPRESS;
    default:
      throw new Error("Unknown network!");
  }
}

/************* CANDY Airdrop deployed information ***************/

// Baobab - Klaytn
// const CANDY_AIRDROP_ADDRESS = '0x84b148d389a94bf97abba8bf04bc4b0f33355418';

// Deployer
const AirdropContractDeployer = (deployer, network) => {
  deployer
    .deploy(CandyAirdrop, getTokenAddress(network))
    .then((_) =>
      console.log(
        `CANDY Airdrop contract has been deployed successfully on ${network}.`
      )
    );
};

/*****************************************************************/

module.exports = (deployer, network) => {
  /**
   * Token contract deploy.
   */
  TokenContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // SaleContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // AirdropContractDeployer(deployer, network);
};
