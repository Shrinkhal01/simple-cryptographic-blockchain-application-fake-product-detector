import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from './ProductAuthABI.json';

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState("Not connected");
  const [productId, setProductId] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connectWalletAndLoadContract = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const productAuth = new ethers.Contract(contractAddress, abi.abi, signer);
          setContract(productAuth);
          setStatus("Connected to contract!");
        } catch (error) {
          setMessage("Connection failed: " + error.message);
        }
      } else {
        setStatus("Please install MetaMask");
      }
    };

    connectWalletAndLoadContract();
  }, []);

  const handleChange = (e) => {
    setProductId(e.target.value);
    setMessage("");
    setProductStatus("");
  };

  const handleAdd = async () => {
    if (!contract || !productId) return;
    try {
      const tx = await contract.addProduct(productId);
      await tx.wait();
      setMessage("✅ Product added successfully.");
    } catch (err) {
      setMessage("❌ Cannot add product: " + (err.reason || "Already exists or invalid."));
    }
  };

  const handleVerify = async () => {
    if (!contract || !productId) return;
    try {
      const tx = await contract.verifyProduct(productId);
      await tx.wait();
      setMessage("✅ Product verified successfully.");
    } catch (err) {
      setMessage("❌ Cannot verify: " + (err.reason || "Invalid state."));
    }
  };

  const handleMarkFake = async () => {
    if (!contract || !productId) return;
    try {
      const tx = await contract.markFake(productId);
      await tx.wait();
      setMessage("✅ Product marked as fake.");
    } catch (err) {
      setMessage("❌ Cannot mark as fake: " + (err.reason || "Invalid state."));
    }
  };

  const handleCheck = async () => {
    if (!contract || !productId) return;
    try {
      const result = await contract.getProductStatus(productId);
      const statusMap = ["None", "Added", "Verified", "Fake"];
      setProductStatus(`🛈 Status: ${statusMap[result]}`);
    } catch (err) {
      setMessage("❌ Error checking product status.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Product Auth dApp</h1>
      <p className="mb-2 text-gray-700">{status}</p>
      <p className="mb-4 text-sm text-gray-600">Connected account: {account}</p>

      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full mb-4"
      />

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
        <button onClick={handleVerify} className="bg-green-500 text-white px-4 py-2 rounded">Verify Product</button>
        <button onClick={handleMarkFake} className="bg-red-500 text-white px-4 py-2 rounded">Mark as Fake</button>
        <button onClick={handleCheck} className="bg-yellow-500 text-black px-4 py-2 rounded">Check Status</button>
      </div>

      {message && <div className="text-sm text-red-600 mb-2">{message}</div>}
      {productStatus && <div className="text-sm text-blue-600">{productStatus}</div>}
    </div>
  );
}

export default App;
