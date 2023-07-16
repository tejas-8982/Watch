import React from 'react'
import Navbar from './Components/Navbar'
import imgh from './Asset/home.png'
import './App.css'; 
import Brands from './Components/Brands';
import Watchs from './Components/Watchs';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div>
     <Navbar/>
     <div className='home'>
     <div className='heading'>
     <h1 className=''>Discover<br/> Most Suitable<br/> watches</h1>
    <p className='content'>Find the best, reliable, and cheap smart watches here.<br/> We focus on Product quality.Here you can find smart <br/> watches of almost all brands .so why are you waiting?<br/>Just order now!</p>
     <div className='search'>
     <span><SearchIcon style={{color:"#3858D6"}}/></span>
     <input type='text' placeholder='Find the best brands' className='search-bar'/>
     <div><button className='btn'>Search</button></div>
     </div>
     </div>
     <img src={imgh} alt='imgh' className='bgimage'/>
     </div>
     <div className='brands'>
     <Brands brand="Apple" description="Apple is one of the most famous smart watches providing company."/>
     <Brands brand="Xiaomi" description="Xiaomi is one of the most famous smart watches providing company."/>
     <Brands brand="FitBit" description="FitBit is one of the most famous smart watches providing company."/>
     </div>

     <p style={{color: "blue", textAlign: "center" }}>find your favourite smartwatch </p>
     <h2 style={{textAlign:"center"}}>Our Latest Product</h2>

     <div className='watch-container'>
    <div className='watches'>
    <Watchs title="Apple Smart I" price="$255.0"/>
    <Watchs title="Apple Smart II " price="$255.0"/>
    <Watchs title="Apple Watch III" price="$255.0"/>
    </div>
    <div className='watchestwo'>
    <Watchs title="Apple Smart IV" price="$255.0"/>
    <Watchs title="Apple Smart pro" price="$255.0"/>
    <Watchs title="FitBit Max I" price="$255.0"/>
    </div>
    </div>
    <div className='btn-container'> <button className='btn'>View More</button></div>
    <p style={{color: "blue", textAlign: "center" }}>Here are our some of the best clients. </p>
    <h2 style={{textAlign:"center"}}>What People Say About us</h2>
    <div className='brands'>
    <Brands brand="Hamza Faizi" description="Don't waste time, just order! This is the best website to purchase smart watches."/>
    <Brands brand="Hafiz Hufaiza" description="Don't waste time, just order! This is the best website to purchase smart watches."/>
    </div>
    <div className='newsletter'>
    <div className='box-left'>
    <h2>Subscribe to Newsletter</h2>
   <p >Get free guid about smartwatches daily</p>
    <div className='subs'>
    <input type='text' placeholder='Enter Email Address' className='search-bar'/>
    <div > <button className='btn'>Subscribe</button></div>
    </div>
    </div>
    <img src={imgh} alt='imgh' className='letter-img' style={{width:"20%"}}/>
    </div>
    <footer>Copyright @2022 | Mohid</footer>
    </div>
  )
}

export default App
