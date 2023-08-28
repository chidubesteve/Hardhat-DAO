const {network}  = require("hardhat")
const {developmentChains, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, log} = await deployments
  const {deployer} = await getNamedAccounts()
    const governanceToken = await deployments.get("GovernanceToken")
    const timeLock = await deployments.get("TimeLock")
    log("Deploying Governor Contract...")

  const governanceContract = await deploy("GovernorContract", {
    from: deployer, 
    log: true,
    args:  [governanceToken.address, timeLock.address, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE],
    waitConfirmations: network.config.blockConfirmations || 1
  })

    // verify
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(governanceContract.address, args)
        log("Verified!")
      }
      log(`Deployed Governor Contract at ${governanceContract.address}`)
    
}