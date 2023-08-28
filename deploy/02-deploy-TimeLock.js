const {network}  = require("hardhat")
const {developmentChains, MIN_DELAY} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy, log} = await deployments
  const {deployer} = await getNamedAccounts()

  log("Deploying Time Lock...")

  const timeLock = await deploy("TimeLock", {
    from: deployer, 
    log: true,
    args:  [MIN_DELAY, [], [], deployer],
    waitConfirmations: network.config.blockConfirmations || 1
  })

    // verify
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(timeLock.address, [])
        log("Verified!")
      }
      log(`Deployed Time lock at ${timeLock.address}`)
    
}