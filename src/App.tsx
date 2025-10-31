import React from 'react';
import './App.css';
import BigImage from './Assets/bg-home.jpg'
import Home from './Home';
import Wallet from './Wallet';
import { Navigation } from './Home';
import MarketPlace from './MarketPlace';
import NFT from './NFTs';
import Discover from './Discover';
import Creator from './Creator';
import Footer from './Footer';

function App() {
  return (
    <div className="App relative">     
       <div className='relative' style={{backgroundImage: `url(${BigImage})`}}> 
        <Navigation homeHref='#home' walletHref='#wallet' marketHref='#marketplace' categoriesHref='#categories' creatorHref='#creator'/>
        <Home id='home'/>
        </div>
      <Wallet id='wallet'/>
      <MarketPlace id='marketplace'/>
      <NFT />
      <Discover id='categories'/>
        <Creator id='creator'/>
      <Footer />
    </div>
  );
}

export default App;
