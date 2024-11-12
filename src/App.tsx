import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { createWallet } from "thirdweb/wallets";
import { Link } from "react-router-dom";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("com.binance"),
  createWallet("io.zerion.wallet"),
  createWallet("com.bybit"),
];

export function App() {
  return (
    <main className="bg-gray-900 text-white min-h-screen ">
	
      <div className="flex justify-end  p-5">
	 

        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: "compact" }}
          connectButton={{ label: "Log In" }}
        />
      </div>

	 
      <div className="flex flex-col pl-5 md:flex-row justify-between items-center md:items-start">
        <div className="mt-10">
		<Hero  />
		</div>
		
        <div className="flex  md:mt-0">
          <img style={{height: '550px', width:'400px'}} className=" md:max-h-58 -ml-16 md:-mr-8" src="./assets/btc.png" alt="BTC Logo" />
          <img  style={{height: '310px', width:'230px' }} className="-ml-20" src="./assets/bit.png" alt="Bit Logo" />
        </div>
      </div>
    </main>
  );
}



function Hero() {
  return (
    <div className=" text-center center pl-10 pt-12 md:text-left max-w-lg mx-auto md:mx-0">
      <h1 className="text-7xl md:text-6xl tracking-wider font-bold mb-4">The World's Fastest Trading Platform</h1>
      <p className="text-base md:text-lg text-gray-400 mb-6">Buy and Sell your Crypto at an affordable rate</p>
     
	 <Link to={'Market'}>
	 	 <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
	  </Link>
    </div>
  );
}