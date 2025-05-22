require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8555",
      chainId: 31337,
    },
  },
  solidity: "0.8.18",
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
  },
};
