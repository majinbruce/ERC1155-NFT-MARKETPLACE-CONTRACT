# ERC1155-NFT-MarketPlace-contarct



## Technology Stack & Tools
* Solidity (Writing Smart Contract)
* Javascript (React & Testing)
* Ethers (Blockchain Interaction)
* Hardhat (Development Framework)

#
### Description
#### NFT Marketplace to buy and sell NFT with your custom ERC20 token.
#### Code is split into 3 diffrent smart contracts:-
## MyToken.sol contarct
Custom ERC20 token for transaction of nfts.
* Contract deployed on rinkeby test network at:

> 0x8e78EF7B43014404b1Ff5278E940231FFd6E38F9

## ERC115.sol contarct
#### mints NFTs directly to the deployer of the contract </br>
#### 3 types of nfts with supply:- </br>
silver    : 10^4 tokens </br>
gold      : 10^3 tokens </br>
platinum  : 1 token (non-fungible) </br>

* Contract deployed on rinkeby test network at:
> 0x97b47651Ff8F2eb65F7F291236E47a221B0E5B3B

## marketplace.sol contarct
* Users can Buy, Sell NFT.
* 2.5% of Sell Price/Token(s) goes to Platform Fees.
* Users can set Fractional Royalties of Multiple Owner(s) for the NFT’s Selling Price. </br> </br>

* Contract deployed on rinkeby test network at:
> 0xf8ea92404F3532Cac8D79dA1D0D037b36ea9132A

## Requirements For Initial Setup
* Install NodeJS, should work with any node version below 16.5.0
* Install Hardhat

## Setting Up
1. Clone/Download the Repository </br></br>
2. Install Dependencies:
> npm init --yes </br>
> npm install --save-dev hardhat </br>
> npm install dotenv --save </br>

3. Install Plugins:
> npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai </br>
> npm install --save-dev @nomiclabs/hardhat-etherscan  </br>
> npm install @openzeppelin/contracts

4. Compile:
> npx hardhat compile

5. Migrate Smart Contracts
> npx hardhat run scripts/deploy.js --network <network-name>

6. Run Tests
> $ npx hardhat test

