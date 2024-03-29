# ERC1155-NFT-MarketPlace-contarct



## Technology Stack & Tools
* Solidity (Writing Smart Contract)
* Javascript (React & Testing)
* Ethers (Blockchain Interaction)
* Hardhat (Development Framework)

#

#### NFT Marketplace to buy and sell NFT with your custom ERC20 token.
#### Code is split into 3 diffrent smart contracts:-
## MyToken.sol contarct
Custom ERC20 token for transaction of nfts.
* Contract deployed on rinkeby test network at:

> 0x49e75Ca51246Fa01dF11E54eAed4b1C6d17d0422

## ERC115.sol contarct
#### mints NFTs directly to the deployer of the contract </br>
#### 3 types of nfts with supply:- </br>
silver    : 10^4 tokens </br>
gold      : 10^3 tokens </br>
platinum  : 1 token (non-fungible) </br>

* Contract deployed on rinkeby test network at:
> 0xF28FE2d30Ec1ba4468b45597D638a774888a39eC

## marketplace.sol contarct
* Users can Buy, Sell NFT.
* 2.5% of Sell Price/Token(s) goes to Platform Fees.
* Users can set Fractional Royalties of Multiple Owner(s) for the NFT’s Selling Price. </br> </br>

* Contract deployed on rinkeby test network at:
> 0x5f8B87F01d4Cc518d96E936B95DD47E19eB5eC1f

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
> npm install --save-dev @nomiclabs/hardhat-etherscan

4. Compile:
> npx hardhat compile

5. Migrate Smart Contracts
> npx hardhat run scripts/deploy.js --network <network-name>

6. Run Tests
> $ npx hardhat test

