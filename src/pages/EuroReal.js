import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logBinance.png'


const EuroReal = () => {
  const [euro , setEuro] = useState(0)
  const [real,setReal] = useState(0)
  const [euroReal,setEuroReal]=useState()

  function converter() {
    fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
    .then(response => response.json())
    .then(data => {
      const euroReal = data['EURBRL']['high'];
      setEuro(real * euroReal)
      setEuroReal(euroReal)
      console.log(`O valor atual do Euro em relação ao real é: ${euroReal}`);
      console.log(euroReal)
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
        <button><Link to="/BtcReal">BtcReal</Link></button>
      
    </nav>
    <h1> {real} Euro(s) = {parseFloat(euro.toFixed(2))} Reais  </h1>
    <h3>O valor atual do euro em relação ao real é {euroReal}</h3>

      <input placeholder='Dolar' type='number' value={real} onChange={(e) => setReal(e.target.value)}></input>
      <button className='converter' onClick={converter}>converter</button>
    <div className='link'>

      <a href='https://www.binance.com/pt-BR/price/euro' target='blank'><img src={logo} alt="Logo" /></a>
      </div>

    </div>
  )
}

export default EuroReal