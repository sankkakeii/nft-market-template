// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ARMY is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ARMY", "ARM") {}

    function safeMint() public payable {
        require(msg.value >= 0.1 ether, "Sende me MORE Ether!");
        _safeMint(_msgSender(), _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), "https://gateway.pinata.cloud/ipfs/QmWgTzgd7jBp9BM3MtNU7HY3KuqVAYeJMQTi4LUgLPABFa");
        _tokenIdCounter.increment();
    }

    function setTokenURI(uint _tokenID, string memory _tokenURI) public onlyOwner returns (bool) {
        _setTokenURI(_tokenID, _tokenURI);
        return true;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
