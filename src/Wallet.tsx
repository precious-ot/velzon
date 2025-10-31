import React from "react";
import metamask from "./Assets/metamask.png";
import wallet from "./Assets/wallet.png";
import binance from "./Assets/binance.png";

type ImageProp = React.ImgHTMLAttributes<HTMLImageElement>;
type MarketProp = {
    title: string;
    description: string;
    button: string;
    image: ImageProp;
    className: string;
};

type IdProp = {
  id: string
}

export function WalletItem({title, description, button, image, className}: MarketProp){
    return(
     <div className="grid gap-5 place-items-center border-1 border-neutral-800 rounded-sm py-8 px-5">
        <img className="w-12" {...image}/>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-neutral-500">{description}</p>
        <button className={className}>{button}</button>
     </div>
    )
}

export default function Wallet({id}: IdProp){
    return(
        <div id={id} className="grid bg-neutral-900 py-20 place-items-center">
            <div className="sm:px-15 px-8 text-neutral-300 text-center">
                <h1 className="font-bold text-3xl">Connect NFT Marketplace</h1>
                <p className="text-md text-neutral-500 max-w-2xl mt-7">A non-fungible token is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.</p>
            </div>
        <div className="grid md:grid-cols-2 md: lg:grid-cols-3 gap-5 px-8 sm:px-15 py-20 text-neutral-200">
            <WalletItem 
            image={{src: metamask}} 
            title="Metamask" 
            description="MetaMask is a popular cryptocurrency wallet known for its ease of use, availability on both desktops."
            button="Connet Wallet" 
            className="bg-sky-500/20 py-2 px-3 text-blue-500 rounded-sm"
            />
            <WalletItem 
            image={{src: wallet}}
            title="Coinbase Wallet"
            description="Coinbase Wallet is a self-custody wallet that gives you complete control of your crypto for your Wallet"
            button="Change Wallet"
            className="bg-blue-500 py-2 px-3 text-blue-200 rounded-sm"
            />
            <WalletItem 
            image={{src: binance}}
            title="Binance"
            description="Binance is considered a safe exchange that allows user account protection via the use of Two Authentication."
            button="Connet Wallet"
            className="bg-sky-500/20 py-2 px-3 text-blue-500 rounded-sm"
            />
        </div>
        </div>
    )
}