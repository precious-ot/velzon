import React from "react";
import Item from "./item";
import img1 from "./Assets/img-01.jpg";
import img2 from "./Assets/img-02.jpg";
import img3 from "./Assets/img-03.jpg";
import img4 from "./Assets/img-4.gif";
import img6 from "./Assets/img-06.jpg";
import img7 from "./Assets/img-7.jpg"
import { useState } from "react";

type IdProp = {
  id: string
}

export function All(){
    return(
       <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-15">
        <Item title="Creative Filtered Portrait" image={{src: img3}} likes={19.} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Creative Filtered Portrait" image={{src: img2}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Creative Filtered Portrait" image={{src: img4}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Creative Filtered Portrait" image={{src: img1}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Creative Filtered Portrait" image={{src: img7}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Creative Filtered Portrait" image={{src: img6}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
       </div>
    )
}

export function Music() {
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
       <Item title="The Chirstoper" image={{src: img2}} likes={19.29} highest={75.3} price={67.36} genres="Music"/>
        <Item title="Evolved Reality" image={{src: img2}} likes={19.29} highest={75.3} price={67.36} genres="video"/>
        <Item title="Long-tailed Macaque" image={{src: img7}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
        <Item title="Robotic Body Art" image={{src: img6}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
       </div>
    );
}

export function Artwork(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
            <Item title="Creative Filtered Portrait" image={{src: img3}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
            <Item title="Evolved Reality" image={{src: img4}} likes={19.29} highest={75.3} price={67.36} genres="video"/>
            <Item title="Robotic Body Art" image={{src: img6}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
        </div>
    )
}

export function Game(){
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
           <Item title="The Chirstoper" image={{src: img2}} likes={19.29} highest={75.3} price={67.36} genres="Music"/>
           <Item title="Evolved Reality" image={{src: img4}} likes={19.29} highest={75.3} price={67.36} genres="Video"/> 
           <Item title="Long-tailed Macaque" image={{src: img7}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
        </div>
    );
}


export function Crypto(){
    return(
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
        <Item title="Creative Filtered Portrait" image={{src: img3}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="The Chirstoper" image={{src: img2}} likes={19.29} highest={75.3} price={67.36} genres="Music"/>
        <Item title="Abstract Face Painting" image={{src: img1}} likes={19.29} highest={75.3} price={67.36} genres="Collectibles"/>
        <Item title="Robotic Body Art" image={{src: img6}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
      </div>
    );
}

export function Style(){
    return(
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
        <Item title="Creative Filtered Portrait" image={{src: img3}} likes={19.29} highest={75.3} price={67.36} genres="Photography"/>
        <Item title="Abstract Face Painting" image={{src: img1}} likes={19.29} highest={75.3} price={67.36} genres="Collectibles"/>
        <Item title="Long-tailed Macaque" image={{src: img7}} likes={19.29} highest={75.3} price={67.36} genres="Artwork"/>
      </div>
    );
}

export default function MarketPlace({id}: IdProp){
    const [all, setAll] = useState<boolean>(true);
    const [artwork, setArtwork] = useState<boolean>(false);
    const [music, setMusic] = useState<boolean>(false);
    const [game, setGame] = useState<boolean>(false);
    const [crypto, setCrypto] = useState<boolean>(false);
    const [style, setstyle] = useState<boolean>(false);

    const handleAll = () =>{
        setAll(true);
        setArtwork(false);
        setCrypto(false);
        setGame(false);
        setstyle(false);
        setMusic(false);
    }

    const handleMusic = () =>{
        setMusic(true);
        setAll(false);
        setArtwork(false);
        setCrypto(false);
        setGame(false);
        setstyle(false);
    }

    const handleArtwork = () =>{
        setMusic(false);
        setAll(false);
        setArtwork(true);
        setCrypto(false);
        setGame(false);
        setstyle(false);
    }

    const handleGame= () =>{
        setMusic(false);
        setAll(false);
        setArtwork(false);
        setCrypto(false);
        setGame(true);
        setstyle(false);
    }

    const handleCrypto = () =>{
        setMusic(false);
        setAll(false);
        setArtwork(false);
        setCrypto(true);
        setGame(false);
        setstyle(false);
    }

    const handleStyle = () =>{
        setMusic(false);
        setAll(false);
        setArtwork(false);
        setCrypto(false);
        setGame(false);
        setstyle(true);
    }
    return(
        <div id={id} className="grid bg-neutral-800 place-items-center px-5 md:px-10 py-20">
            <h1 className="text-3xl font-bold text-neutral-100 max-w-3xl">Explore Products</h1>
            <p className="text-md text-neutral-500 max-w-3xl mt-8">Collection widgets specialize in displaying many elements of the same type, such as a collection of pictures from a collection of articles.</p>
            <div className="sm:flex grid grid-cols-3 mt-8 gap-5">
               <button className={`text-neutral-100 py-2 px-4 ${all ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleAll}>All Items</button>
               <button className={`text-neutral-100 py-2 px-4 ${artwork ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleArtwork}>Artwork</button>
               <button className={`text-neutral-100 py-2 px-4 ${music ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleMusic}>Music</button>
               <button className={`text-neutral-100 py-2 px-4 ${game ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleGame}>Game</button>
               <button className={`text-neutral-100 py-2 px-4 ${crypto ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleCrypto}>Crypto Card</button>
               <button className={`text-neutral-100 py-2 px-4 ${style ? "bg-blue-500 rounded-md py-2 px-4" : ""}`} onClick={handleStyle}>3d Style</button>
            </div>
            <div className="">
                {all &&
                <All />
                }
                {artwork &&
                <Artwork />
                }
                {music && 
                <Music />
                }
                {game &&
                 <Game />
                }
                {crypto &&
                <Crypto />
                }
                {style &&
                  <Style />
                }
            </div>
        </div>
    )
}