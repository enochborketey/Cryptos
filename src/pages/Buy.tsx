import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { Link } from "react-router-dom";
import { Navbar } from './Market';
import { client } from '../client';


const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("com.binance"),
  createWallet("io.zerion.wallet"),
  createWallet("com.bybit"),
];

function Buy() {
  return (
    <div className='bg-gray-800 h-full min-h-screen'>
           <Navbar />

           <div className="flex pr-2  justify-end">
	 
   <ConnectButton
     client={client}
     wallets={wallets}
     connectModal={{ size: "compact" }}
     connectButton={{ label: "Connect Wallet" }}
   />
 </div>
 <div  className='flex justify-center gap-5 '>
 <BtcWallet />
 <EthWallet />
 <TonWallet />
 </div>
 
    </div>
  )
}

function BtcWallet() {
return (
  <div className="max-w-xs bg-gray-600 text-white rounded-lg shadow-lg p-6 space-y-4">
  
  <div>
    <h3 className="text-lg font-semibold">BITCOIN</h3>
    <img src='../assets/btcLogo.png'/>
    <p className="text-gray-400 text-sm">Wallet Balance</p>
  </div>

  
  <div className="flex items-center justify-between">
    <p className="text-3xl font-bold">$1,234.56</p>
    <span className="text-gray-400 text-xs">USD</span>
  </div>

  
  <div className="flex space-x-4 p-10">
    <button className="flex-1  bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors duration-200">
      Buy
    </button>
    <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors duration-200">
      Sell
    </button>
  </div>
</div>

);
}


function EthWallet() {
  return (
    <div className="max-w-xs bg-gray-600 text-white rounded-lg shadow-lg p-6 space-y-4">
    
    <div>
      <h3 className="text-lg font-semibold">ETHEREUM</h3>
      <img src='../assets/eth.png'/>
      <p className="text-gray-400 text-sm">Wallet Balance</p>
    </div>
  
    
    <div className="flex items-center justify-between">
      <p className="text-3xl font-bold">$1,234.56</p>
      <span className="text-gray-400 text-xs">USD</span>
    </div>
  
    
    <div className="flex space-x-4 ">
      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors duration-200">
        Buy
      </button>
      <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors duration-200">
        Sell
      </button>
    </div>
  </div>
  
  );
  }



  function TonWallet() {
    return (
      <div className="max-w-xs bg-gray-600 text-white rounded-lg shadow-lg p-6 space-y-4">
      
      <div>
        <h3 className="text-lg font-semibold">TON</h3>
        <img src='../assets/ton.png'/>
        <p className="text-gray-400 text-sm">Wallet Balance</p>
      </div>
    
      
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">$1,234.56</p>
        <span className="text-gray-400 text-xs">USD</span>
      </div>
    
      
      <div className="flex space-x-4">
        <button className="flex-1 bg-green-600 text-white py-2  rounded-lg hover:bg-green-500 transition-colors duration-200">
          Buy
        </button>
        <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors duration-200">
          Sell
        </button>
      </div>
    </div>
    
    );
    }







export default Buy
