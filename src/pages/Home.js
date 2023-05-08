import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import logo from '../image/logBinance.png'

const Home = () => {
  return (

    <div>
      <h1>Bem-vindo ao nosso site de conversão</h1>
       <p>
      Você pode facilmente converter valores em diferentes moedas do mundo. Nós fornecemos uma ferramenta simples e fácil de usar para ajudá-lo a converter seus valores de moeda de forma rápida e precisa. Com o nosso conversor de moedas, você pode obter taxas de câmbio atualizadas em tempo real e converter valores de uma moeda para outra com apenas alguns cliques.
      <br/>
      <br/>

Seja você um viajante que precisa converter moedas para planejar sua viagem, um empresário que lida com transações internacionais ou um investidor que precisa acompanhar as taxas de câmbio em tempo real, nosso site é a escolha ideal para você. Oferecemos uma ampla variedade de moedas disponíveis para conversão e atualizamos nossas taxas de câmbio com frequência para garantir que você esteja sempre obtendo informações precisas.
<br/>
      <br/>

Além disso, nosso site é fácil de usar e acessível em qualquer dispositivo, seja desktop ou mobile. Portanto, se você precisa converter moedas rapidamente, sem complicações e sem precisar sair de casa, nosso site é a escolha certa para você. Comece a converter suas moedas agora e aproveite a facilidade e conveniência que oferecemos!
    </p>

      <nav>
        
          <button className='buttonhome'><Link to="/Menu"><b>Acesse o nosso Menu</b></Link></button>
         
        
      </nav>
      <div className='link'>

      <a href='https://accounts.binance.com/pt-BR/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vcHQtQlIvbXkvd2FsbGV0L2FjY291bnQvbWFpbg==' target='blank'><img src={logo} alt="Logo" /></a>
      </div>

      </div>
  )
}

export default Home