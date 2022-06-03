// SPDX-License-Identifier: UNLISENCED
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC1155, Ownable {
    uint256 public constant SILVER = 0;
    uint256 public constant GOLD = 1;
    uint256 public constant PLATINUM = 2; // this nft will be non fungible

    constructor(string memory uri) onlyOwner ERC1155(uri) {
        _mint(msg.sender, SILVER, 10**4, "");
        _mint(msg.sender, GOLD, 10**3, "");
        _mint(msg.sender, PLATINUM, 1, "");
    }
}
