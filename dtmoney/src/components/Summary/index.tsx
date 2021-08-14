import { useEffect } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header> 
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> -R$ 5.000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saídas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container>
  )
}