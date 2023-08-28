const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log, get} = await deployments
    const {deployer} = await getNamedAccounts()

    log("Deploying Box")

    const Box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations,
    })

    const timeLock = await ethers.getContract("TimeLock")
    const boxContract =  await ethers.getContractAt("Box", Box.address)
    const transferOwnerTx = await boxContract.transferOwnership(timeLock.address)
    await transferOwnerTx.wait(1)
    log("ODOGWU PROGRAMMER!!")

    if(!developmentChains.includes(network.name)  && process.env.ETHERSCAN_API_KEY)  {
        log("Verifying...")
        await verify(Box.address, [])
        log("Verified!")
    }
}