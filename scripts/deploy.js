const hre = require("hardhat");

async function main() {
  const ProductAuth = await hre.ethers.getContractFactory("ProductAuth");
  const productAuth = await ProductAuth.deploy();
  await productAuth.deployed();
  console.log(`Contract deployed to: ${productAuth.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
