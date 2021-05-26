import line from '../../assets/line.png'
import mainImage from '../../assets/image.png'

import { Container } from './styles';

export function MainSection()  {
  return(
    <Container>
        <div>
          <h1>Simule sua antecipação</h1>
          <img src={line} alt="linha para separar o titulo do subtitulo" />
          <h2>Antecipe as suas parcelas com muito mais segurança.</h2>
        </div>
        <img className="mainImage" src={mainImage} alt="imagem de uma mulher feliz mexendo no computador" />
    </Container>
  )
}
