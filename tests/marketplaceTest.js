const { expect } = require("chai");

const { ethers } = require("hardhat");

describe("NFTmarketPlace", function () {
  let owner;
  let addr1;
  let addr2;
  let adrs;
  let nft;
  let marketplace;
  let token;
  let TOKEN;
  let NFT;
  let MARKETPLACE;
  let totalSupply = ethers.utils.parseUnits("1", 17);
  let URI = "dummy URI";

  beforeEach(async function () {
    TOKEN = await ethers.getContractFactory("MyToken");
    NFT = await ethers.getContractFactory("MyNFT");
    MARKETPLACE = await ethers.getContractFactory("Marketplace");

    [owner, addr1, addr2, ...adrs] = await ethers.getSigners();

    nft = await NFT.deploy(URI);
    token = await TOKEN.deploy(totalSupply);

    marketplace = await MARKETPLACE.deploy(token.address, nft.address);

    await token.transfer(addr1.address, ethers.utils.parseUnits("1000000", 10));
    await token.transfer(addr2.address, ethers.utils.parseUnits("1000000", 10));

    // Give marketplace contract erc20 token allowance and
    // ERC721 NFT token approvals from all accounts.

    await token.approve(
      marketplace.address,
      ethers.utils.parseUnits("1000000", 10)
    );
    await nft.setApprovalForAll(marketplace.address, true);

    await token
      .connect(addr1)
      .approve(marketplace.address, ethers.utils.parseUnits("1000000", 10));
    await nft.connect(addr1).setApprovalForAll(marketplace.address, true);

    await token
      .connect(addr2)
      .approve(marketplace.address, ethers.utils.parseUnits("1000000", 10));
    await nft.connect(addr2).setApprovalForAll(marketplace.address, true);
  });

  describe("deployment", function () {
    it("Should track feeAccount and feePercent of the marketplace", async function () {
      expect(await marketplace.feeAccount()).to.equal(owner.address);
      expect(await marketplace.platformFeePercent()).to.equal(25);
    });
  });

  describe("minting nfts", function () {
    it("should assign the right amount of nfts to the owner of the contract", async function () {
      expect(await nft.balanceOf(owner.address, 0)).to.equal(10 ** 4);
      expect(await nft.balanceOf(owner.address, 1)).to.equal(10 ** 3);
      expect(await nft.balanceOf(owner.address, 2)).to.equal(1);
    });
  });

  describe("marketplace", function () {
    it("should throw correct error ", async function () {
      const tokenid = 2;
      const price = 2;
      const royalty = 20;
      const amount = 10; // cannot list 10 platimun nfts as there is only 1 existing
      await expect(
        marketplace.listNFT(tokenid, price, royalty, amount)
      ).to.be.revertedWith("no sufficient amount of nfts");
    });
    it("should allow users to buy listed nfts", async function () {
      const tokenid = 2;
      const price = 2;
      const royalty = 20;
      const amount = 1;
      await marketplace.listNFT(tokenid, price, royalty, amount);
      await marketplace.connect(addr1).buyNFT(tokenid, amount);

      postSaleOwnerBalance = nft.balanceOf(owner.address, tokenid);
      postSaleaddr1Balance = nft.balanceOf(addr1.address, tokenid);

      expect(await postSaleOwnerBalance).to.equal(0);
      expect(await postSaleaddr1Balance).to.equal(1);
    });
  });
});
