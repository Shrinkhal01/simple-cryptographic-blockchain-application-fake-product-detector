// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductAuth {
    enum Status { None, Added, Verified, Fake }

    mapping(uint256 => Status) public productStatus;

    function addProduct(uint256 productId) external {
        require(productStatus[productId] == Status.None, "Product already exists");
        productStatus[productId] = Status.Added;
    }

    function getProductStatus(uint256 productId) public view returns (Status) {
        return productStatus[productId];
    }

    function verifyProduct(uint256 productId) external {
        require(productStatus[productId] == Status.Added, "Product not in a state to verify");
        productStatus[productId] = Status.Verified;
    }

    function markFake(uint256 productId) external {
        require(
            productStatus[productId] == Status.Added || productStatus[productId] == Status.Verified,
            "Product not in a state to mark fake"
        );
        productStatus[productId] = Status.Fake;
    }
}
