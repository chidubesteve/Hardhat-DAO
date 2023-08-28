const {network}  = require("hardhat")
const {developmentChains} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, log} = await deployments
  const {deployer} = await getNamedAccounts()

  log("Deploying Governance Token...")

  const governanceToken = await deploy("GovernanceToken", {
    from: deployer, 
    log: true,
    args:  [],
    waitConfirmations: network.config.blockConfirmations || 1
  })
  // verify
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
      log("Verifying...")
      await verify(governanceToken.address, [])
      log("Verified!")
    }
    log(`Deployed governance token at ${governanceToken.address}`)

    await delegate(governanceToken.address, deployer)
    log("Delegated!")
  }
const delegate = async (governanceTokenAddress, delegatedAccount) => {
  const governanceToken  = await ethers.getContractAt("GovernanceToken", governanceTokenAddress)
  const tx = await governanceToken.delegate(delegatedAccount)
  await tx.wait(1)
  console.log(`Checkpoint ${await governanceToken.numCheckpoints(delegatedAccount)}`)
}
