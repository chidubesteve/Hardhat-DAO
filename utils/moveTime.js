const { network } = require("hardhat")


module.exports = async function moveTime(amount){
    console.log(("Moving Time..."))
    await network.provider.send("evm_increaseTime", [amount])
    console.log(`Moved forward by ${amount} seconds`)
}