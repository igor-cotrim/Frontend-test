import {InputValues} from '../InputValues'

import { Container } from './styles';

export function SimulationSection() {
  return (
    <Container>
      <div>
        <h2>Faça sua simulação</h2>

        <InputValues/>

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
