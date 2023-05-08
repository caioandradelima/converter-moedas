import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logBinance.png'
import { useState } from 'react'



const BtcReal = () => {


  const [btc , setBtc] = useState(0)
  const [real,setReal] = useState(0)
  const [btcReal,setBtcReal] = useState()

  function converter() {
    fetch('https://economia.awesomeapi.com.br/last/BTC-BRL')
    .then(response => response.json())
    .then(data => {
      const btcReal = data['BTCBRL']['high'];
      setBtc(real * btcReal)
      setBtcReal(btcReal)
      console.log(`O valor atual do Euro em relação ao real é: ${btcReal}`);
      console.log(btcReal)
    });
  }

  return (
    <div>

      

    <nav>
      
    <button className='buttonhomes'><Link to="/">Home</Link></button>
          <br/>
        <button><Link to="/Menu">Menu</Link></button>
        <button><Link to="/RealDolar">RealDolar</Link></button>
        <button><Link to="/DolarReal">DolarReal</Link></button>
        <button><Link to="/EuroReal">EuroReal</Link></button>
      
    </nav>
    <h1> {real} Bitcoin(s) = {parseFloat(btc.toFixed(2))} Reais  </h1>
    <h3>O valor atual do Bitcoin em relação ao real é {btcReal}</h3>

      <input placeholder='Bitcoin' type='number' value={real} onChange={(e) => setReal(e.target.value)}></input>
      <button className='converter' onClick={converter}>converter</button>
    <div className='link'>

      <a href='https://www.binance.com/pt-BR/trade/BTC_BRL?theme=dark&type=spot' target='blank'><img src={logo} alt="Logo" /></a>
      </div>

    </div>
  )
}

export default BtcReal