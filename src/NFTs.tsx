import React from "react";
import wallet from "./Assets/wallet.png";
import add from "./Assets/add.png";
import money from "./Assets/money.png";
import sell from "./Assets/sell.png";

type ImageProp = React.ImgHTMLAttributes<HTMLImageElement>
type NFTProp = {
  image: ImageProp;
  title: string;
  description: string;
}

export function NFTItem({image, title, description}: NFTProp) {
   return(
     <div className="border-1 border-neutral-700 text-start rounded-sm bg-neutral-950 px-5 py-5">
        <img className="w-15" {...image}/>
        <h1 className="text-xl font-semibold text-neutral-100 mt-3">{title}</h1>
        <p className="text-neutral-500 my-3">{description}</p>
        <button className="flex place-items-center text-blue-500"><span>Read More</span> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="blue" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg></button>
     </div>
   );
}

export default function NFT() {
    return(
        <div className="grid place-items-center bg-neutral-900 py-20 px-15">
            <div className="max-w-3xl">
                <h2 className="text-neutral-100 font-semibold text-3xl">Create and Sell Your NFTs</h2>
                <p className="text-neutral-500 mt-8">The process of creating an NFT may cost less than a dollar, but the process of selling it can cost up to a thousand dollars. For example, Allen Gannett, a software developer.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-15">
                <NFTItem 
                 image={{src: wallet}}
                 title="Set up your wallet" 
                 description="You have to choose whether to use a hot wallet a cold wallet."/>

                 <NFTItem 
                 image={{src: money}}
                 title="Create your collection" 
                 description="Create a collection in Opensea and give it a proper art."/>

                 <NFTItem 
                 image={{src: add}}
                 title="Add your NFT's" 
                 description="Go to your profile icon and top right corner creation page."/>

                 <NFTItem 
                 image={{src: sell}}
                 title="Sell Your NFT's" 
                 description="Create a collection in Opensea and give Add items and art."/>
            </div>
        </div>
    );
}