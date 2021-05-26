import { Container } from './styles';

export function SimulationSection() {
  return (
    <Container>
      <div className="letfSection">
        <h2>Faça sua simulação</h2>
        <h3>Valor da venda*</h3>
        <div className="valueSell">
          <div>
            <h1>R$ 800,00</h1>
          </div>
          <button>-</button>
          <button>+</button>
        </div>
        <h3>Em quantas parcelas*</h3>
        <div className="NumParcel">
          <div>
            <h1>3 parcelas</h1>
          </div>
          <button>-</button>
          <button>+</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Morbi eu magna bibendum, fringilla orci ac, ornare dolor.
        </p>
      </div>
      <div className="rightSection">
          <p>amanhã você receberá</p>
          <h1>R$ 0,00</h1>
          <p>em 15 dias você receberá</p>
          <h1>R$ 0,00</h1>
          <p>em 30 dias você receberá</p>
          <h1>R$ 0,00</h1>
      </div>
    </Container>
  )
}
