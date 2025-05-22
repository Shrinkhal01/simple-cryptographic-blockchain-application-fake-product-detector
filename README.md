# 🔐 Simple Cryptographic Blockchain Application
## Fake Product Detector

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.0-blue)](https://soliditylang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB)](https://reactjs.org/)
[![Ethereum](https://img.shields.io/badge/Ethereum-Blockchain-627EEA)](https://ethereum.org/)

This project is a **decentralized application (dApp)** built on Ethereum that allows users to manage and verify the authenticity of products using blockchain technology. It leverages smart contracts to ensure the integrity of product data and provides a simple frontend for interaction.

---

## ✨ Features

- 🆕 **Add Product**: Add a new product to the blockchain
- ✅ **Verify Product**: Mark a product as verified
- ❌ **Mark as Fake**: Mark a product as fake
- 🔍 **Check Status**: Retrieve the current status of a product

---

## 📁 Project Structure

```
├── contracts/
│   └── ProductAuth.sol         # Smart contract
├── frontend/
│   └── src/                    # React frontend
├── scripts/
│   └── deploy.js              # Deployment script
└── README.md
```

### 🔑 Key Files

| File | Description |
|------|-------------|
| [`ProductAuth.sol`](contracts/ProductAuth.sol) | Main smart contract |
| [`frontend/src`](frontend/src) | React-based frontend |
| [`deploy.js`](scripts/deploy.js) | Deployment script |

---

## 📜 Smart Contract: `ProductAuth.sol`

The smart contract is written in **Solidity** and defines the core functionality for product authentication.

### 🏷️ Enum: `Status`

Represents the status of a product:

| Status | Description |
|--------|-------------|
| `None` | Default state |
| `Added` | Product has been added |
| `Verified` | Product has been verified |
| `Fake` | Product has been marked as fake |

### 🔧 Functions

#### `addProduct(uint256 productId)`
- **Purpose**: Adds a new product to the blockchain
- **Requirement**: Product must not already exist

#### `getProductStatus(uint256 productId) public view returns (Status)`
- **Purpose**: Returns the current status of a product
- **Type**: View function (read-only)

#### `verifyProduct(uint256 productId)`
- **Purpose**: Marks a product as verified
- **Requirement**: Product must be in the `Added` state

#### `markFake(uint256 productId)`
- **Purpose**: Marks a product as fake
- **Requirement**: Product must be in the `Added` or `Verified` state

---

## 🖥️ Frontend

The frontend is built using **React** and interacts with the smart contract via the `ethers.js` library.

### 🧩 Key Components

- **`App.js`**: Main component handling wallet connection, contract interaction, and UI
- **`ProductAuthABI.json`**: ABI file for the `ProductAuth` smart contract

### 🎯 Features

- 🦊 Connect to MetaMask
- 🔄 Add, verify, mark as fake, and check product status
- 📱 User-friendly interface with real-time feedback
- 💬 Display messages and statuses to users

---

## 🚀 Deployment

### 📋 Prerequisites

Make sure you have the following installed:

- ✅ Node.js and npm
- ✅ Hardhat
- ✅ MetaMask browser extension

### 📝 Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Compile the smart contract**
   ```bash
   npx hardhat compile
   ```

3. **Deploy the smart contract**
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

4. **Update environment variables**
   
   Note the deployed contract address and update your `.env` file:
   ```env
   REACT_APP_CONTRACT_ADDRESS=<deployed-contract-address>
   ```

5. **Start the frontend**
   ```bash
   cd frontend
   npm start
   ```

---

## 🎮 Usage

1. **🌐 Open the application** in your browser
2. **🔗 Connect your MetaMask wallet**
3. **🎯 Interact with the smart contract** using the provided interface:
   - 📝 Add a product by entering its ID
   - ✅ Verify products as authentic
   - ❌ Mark products as fake
   - 🔍 Check any product's current status

---

## 🛡️ Security Features

- **Immutable Records**: Once added to the blockchain, product data cannot be altered
- **Decentralized Verification**: No single point of failure
- **Transparent Tracking**: All product status changes are publicly verifiable
- **Smart Contract Validation**: Built-in requirements prevent invalid state transitions

---

## 🔮 Future Enhancements

- 📱 Mobile application support
- 🏪 Multi-vendor marketplace integration
- 📊 Analytics dashboard
- 🔔 Real-time notifications
- 🌍 IPFS integration for product metadata

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

If you have any questions or need help, please:

- 🐛 Open an issue on GitHub
- 📧 Contact the development team
- 📖 Check the documentation

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by the Blockchain Development Team

</div>