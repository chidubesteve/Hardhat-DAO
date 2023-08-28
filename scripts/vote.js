const fs = require("fs");
const { proposalFile, developmentChains, VOTING_PERIOD } = require("../helper-hardhat-config");
const { network, ethers } = require("hardhat");
const moveBlocks = require("../utils/moveBlocks");
const index = 0;

// 0 = Against, 1 = For, 2 = Abstain for this example
async function main() {
    const proposals = JSON.parse(fs.readFileSync(proposalFile, "utf8"))
    
    const proposalId = proposals[network.config.chainId].at(-1);
    console.log(proposalId)
    // 0 = Against, 1 = For, 2 = Abstain for this example
    const voteWay = 1;
    const reason = "I lika do da cha cha";
    await vote(proposalId, voteWay, reason, { gasLimit: 800000 });
}

// 0 = Against, 1 = For, 2 = Abstain for this example
async function vote(proposalId, voteWay, reason) {
    console.log("Voting...");
    const governor = await ethers.getContract("GovernorContract");
    const voteTx = await governor.castVoteWithReason(proposalId, voteWay, reason, { gasLimit: 800000 });
    const voteTxReceipt = await voteTx.wait(1);
    console.log(voteTxReceipt.events[0].args.reason);
    const proposalState = await governor.state(proposalId);
    console.log(`Current Proposal State: ${proposalState}`);
    if (developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 2);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
