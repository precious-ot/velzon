import React from "react";
import { useState, useEffect } from "react";
import Logo from "./Assets/logo-light.png"
type HomeProp = {
  id: string
}

type NavigationProp = {
  homeHref: string
  walletHref: string
  marketHref: string
  categoriesHref: string
  creatorHref: string
}

export function Navigation({homeHref, walletHref, marketHref, categoriesHref, creatorHref}: NavigationProp) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [closeMenu, setCloseMenu] = useState<boolean>(true);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [link, setLink] = useState<boolean>(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
        setCloseMenu(false);
    }

    const handleClose = () => {
        setCloseMenu(true);
        setOpenMenu(false)
    }

    return(
       <div className={`fixed top-0 left-0 z-80 w-full ${scrolled ? "bg-black/90" : "bg-transparent"}`}>
        <div className="flex justify-between px-5 py-8">
         <div>
            <img className="w-30" src={Logo} alt="logo"/>
         </div>
         <div className="hidden md:block">
            <ul >
                <li className="inline px-2"><a href={homeHref} className="cursor-pointer text-neutral-300 font-semibold f">Home</a></li>
                <li className="inline px-2"><a href={walletHref} className="cursor-pointer text-neutral-300 font-semibold f">Wallet</a></li>
                <li className="inline px-2"><a href={marketHref} className="cursor-pointer text-neutral-300 font-semibold f">Marketplace</a></li>
                <li className="inline px-2"><a href={categoriesHref} className="cursor-pointer text-neutral-300 font-semibold f">Categories</a></li>
                <li className="inline px-2"><a href={creatorHref} className="cursor-pointer text-neutral-300 font-semibold f">Creators</a></li>
            </ul>
         </div>
         {openMenu &&
           <div className="fixed text-start pt-6 right-0 top-0 w-full sm:w-sm h-full w-auto bg-blue-950">
             {openMenu &&
              <div className="ps-5">
               <button onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#ffffffbf" className="bi bi-x" viewBox="0 0 16 16">
               <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
               </svg></button>
               </div>
              }
            <ul className="mt-8">
                <li onClick={handleClose} className="border-b-1 border-blue-700 py-4 ps-6"><a href={homeHref} className="cursor-pointer text-neutral-300 font-semibold f">Home</a></li>
                <li onClick={handleClose} className="border-b-1 border-blue-700 py-4 ps-6"><a href={walletHref} className="cursor-pointer text-neutral-300 font-semibold f">Wallet</a></li>
                <li onClick={handleClose} className="border-b-1 border-blue-700 py-4 ps-6"><a href={marketHref} className="cursor-pointer text-neutral-300 font-semibold f">Marketplace</a></li>
                <li onClick={handleClose} className="border-b-1 border-blue-700 py-4 ps-6"><a href={categoriesHref} className="cursor-pointer text-neutral-300 font-semibold f">Categories</a></li>
                <li onClick={handleClose} className="border-b-1 border-blue-700 py-4 ps-6"><a href={creatorHref} className="cursor-pointer text-neutral-300 font-semibold f">Creators</a></li>
            </ul>
            <div className="mt-8 ps-6">
            <button className="bg-blue-600 py-2 px-3 text-neutral-200 text-sm rounded-sm font-semibold">Wallet Connect</button>
            </div>
         </div>
         }
         {closeMenu &&
          <div className="md:hidden">
            <button onClick={handleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffffbf" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg></button>
          </div>
         }
         <div className="hidden md:block">
            <button className="bg-blue-600 py-2 px-3 text-neutral-200 text-sm rounded-sm font-semibold">Wallet Connect</button>
         </div>
        </div>
        </div>
    )
}

export default function Home({id}: HomeProp) {
  return(
    <div id={id} className="relative">
    <div className="pt-40 px-8 pb-30 grid justify-center place-items-center">
        <h1 className="capitarize max-w-xl text-neutral-200 leading-15 font-semibold text-5xl">Discover Digital Art & Collect <span>NFT Marketplace</span></h1>
        <p className="text-neutral-400 font-semibold text-lg max-w-2xl text-center mt-8">Can artwork be NFT? NFTs (non-fungible tokens) are one-of-a-kind digital assets. Given they're digital in nature, can physical works of art be turned into NFTs?.</p>
        <div className="flex justify-center gap-5 mt-8">
          <button className="py-2 px-4 bg-blue-700 cursor-pointer text-neutral-100 text-md font-semibold rounded-sm">Create Own</button>
          <button className="py-2 px-4 bg-gray-400 cursor-pointer text-neutral-100 text-md font-semibold rounded-sm">Explor now</button>
        </div>
    </div>
    </div>
  )
}