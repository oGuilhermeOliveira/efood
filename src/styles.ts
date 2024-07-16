import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  vermelho: '#E66767',
  bege: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelho}
  }
`

export const Container = styled.div`
  max-width: 2148px;
  width: 100%;
  margin: 0 auto;
`
