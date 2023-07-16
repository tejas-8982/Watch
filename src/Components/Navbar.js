import React from 'react'
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WatchIcon from '@mui/icons-material/Watch';
const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
      <li ><WatchIcon/></li>
        <li className='nav-left'>Mohid</li>
        <li className='nav-mid'>Home</li>
        <li className='nav-mid'>Brands</li>
        <li className='nav-mid'>Recent Products</li>
        <li className='nav-mid'>Contact</li>
        <li className='nav-mid'>About</li>
        <li className='nav-right'><SearchIcon/></li>
        <li ><PersonIcon/></li>
        <li ><ShoppingCartIcon/></li>

      </ul>
    </div>
  )
}

export default Navbar
