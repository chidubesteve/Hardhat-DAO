# Hardhat-DAO
A Decentralized Autonomous Organization (DAO) Contract built with Hardhat and OpenZeppelin contracts 

 - This repository contains Solidity smart contracts for a DAO built using Hardhat and inspired by Compound DAO. The DAO uses OpenZeppelin contracts for the core functionality.



## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Hardhat](https://hardhat.org/) (installed globally or as a dev dependency)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/chidubesteve/Hardhat-DAO.git

   ```

2. Navigate to the project directory:

   ```bash
   cd Hardhat-DAO
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Running Local Blockchain

Run a local Ethereum blockchain for testing and development:

```bash
npx hardhat node
```

### Running Scripts

You can execute various scripts using Hardhat to interact with your DAO contracts. Each script is located in the `scripts` directory.

To run a script, use the following command:

```bash
npx hardhat run scripts/<script-name>.js --network localhost
```

Replace `<script-name>` with the name of the script you want to run.

## Available Scripts

### Proposing a Proposal

```bash
npx hardhat run scripts/propose.js --network localhost
```

This script proposes a new action to the DAO.

### Voting on a Proposal

```bash
npx hardhat run scripts/vote.js --network localhost
```

This script allows you to cast your vote on a proposal.

### Queueing and Executing a Proposal

```bash
npx hardhat run scripts/queueAndExecute.js --network localhost
```

This script queues and executes a proposal after it has passed the voting period.

## Contributing

Feel free to contribute to this project by submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

If your found this repo helpful, don't forget to give it a ⭐ and follow for more 👇

[Twitter](https://twitter.com/chidube_steve)

[LinkedIn](https://www.linkedin.com/in/chidube-anike-7a7721251/)

Made with ❤ from ME!
