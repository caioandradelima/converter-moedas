import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logBinance.png'
import axios from 'axios'
import { useState , useEffect } from 'react'


const Menu = () => {
  

  
    
  return (
    <div>
      

      
        
          <button className='buttonMenu'><Link className='link' to="/">Home</Link></button>
          
          
          <br/>
          <button className='buttonMenu'><Link className='link' to="/RealDolar">Converta Real-Dolar</Link></button>
          <br/>
        
          <br/>
          <button className='buttonMenu' ><Link className='link' to="/DolarReal">Converta Dolar-Real</Link></button>
          <br/>
         
          <br/>
          <button className='buttonMenu'><Link className='link' to="/EuroReal">Converta Euro-Real</Link></button>
         
          <br/>
          <button className='buttonMenu'><Link className='link' to="/BtcReal">Converta Btc-Real</Link></button>
          
           
        
      
      <div className='linka'>

      <a href='https://accounts.binance.com/pt-BR/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vcHQtQlIvbXkvd2FsbGV0L2FjY291bnQvbWFpbg==' target='blank'><img src={logo} alt="Logo" /></a>
      
      </div>
        

      </div>
  )
}

export default Menu