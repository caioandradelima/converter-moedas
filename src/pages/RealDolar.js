import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logBinance.png'
import { useState } from 'react'

const RealDolar = () => {
  const [dolar , setDolar] = useState(0)
  const [real,setReal] = useState(0)
  const [dolarReal , setDolarReal] = useState()

  function converter() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then(response => response.json())
    .then(data => {
      const dolarReal = data['USDBRL']['high'];
      setDolar(real /dolarReal)
      setDolarReal(dolarReal)
      console.log(`O valor atual do dólar em relação ao real é: ${dolarReal}`);
      console.log(dolarReal)
    });
   
    
    

  }
  return (
    <div>
      

    <nav>
      
    <button className='buttonhomes'><Link to="/">Home</Link></button>
          <br/>
        <button><Link to="/Menu">Menu</Link></button>
        <button><Link to="/DolarReal">DolarReal</Link></button>
        <button><Link to="/EuroReal">EuroReal</Link></button>
        <button><Link to="/BtcReal">BtcReal</Link></button>
      
    </nav>
    <h1> {real} Reais = {parseFloat(dolar.toFixed(2))} Dolar(es)  </h1>
    <h3>O valor atual do dólar em relação ao real é {dolarReal}</h3>

      <input placeholder='Dolar' type='number' value={real} onChange={(e) => setReal(e.target.value)}></input>
      <button className='converter' onClick={converter}>converter</button>
    <div className='link'>

      <a href='https://www.binance.com/pt-BR/trade/USDT_BRL?theme=dark&type=spot' target='blank'><img src={logo} alt="Logo" /></a>
      </div>

    </div>
  )
}

export default RealDolar