import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const HeaderLayout = styled.header`
  top: -24px;
  background-image: url(${fundo});
  max-width: 2032px;
  width: 100%;
  height: 384px;
  background-color: #e667670d;
  overflow-y: hidden;

  img {
    margin-top: 64px;
  }
`

export const HeaderText = styled.p`
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 140px;
  margin-bottom: 40px;
`
export const HeaderContainer = styled.div`
  text-align: center;
`
