import { useEffect } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { api } from '../../services/api';
import { Container } from "./styles";

export function Summary() {

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

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