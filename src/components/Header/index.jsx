import logo from '../../assets/logo.svg'
import menu from '../../assets/hamburger-menu.svg'

import { Container } from './styles';

export function Header() {
  return(
    <Container>
        <img src={logo} alt="logo da empresa Izap Softworks"/>
        <img src={menu} alt="menu de hamburger para mais informações" />
    </Container>
  )
}
