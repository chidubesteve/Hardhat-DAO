
const networkConfig = {
  11155111: {
    name: "sepolia",

  },
  31337: {
    name: "hardhat",

  },
};

const developmentChains = ["hardhat", "localhost"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const MIN_DELAY = 3600;
const VOTING_PERIOD = 5;
const VOTING_DELAY = 1;
const QUORUM_PERCENTAGE = 4;
 const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
 const NEW_STORE_VALUE = 77;
 const FUNC = "store";
 const PROPOSAL_DESCRIPTION = "Proposal #1: store 77 in the Box!";
 const proposalFile = "proposals.json";


module.exports = {
  networkConfig,
  ADDRESS_ZERO,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  MIN_DELAY,
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCENTAGE,
  NEW_STORE_VALUE,
  FUNC,
  PROPOSAL_DESCRIPTION,
  proposalFile

};
