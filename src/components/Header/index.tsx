import { HeaderContainer, HeaderLayout, HeaderText } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderLayout>
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <HeaderText>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </HeaderText>
    </HeaderContainer>
  </HeaderLayout>
)

export default Header
