import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaLight from './themes/light'
import temaDark from './themes/dark'

import EstiloGlobal, { Container } from './styles'

function App() {
  const [useTemaDark, setUseTemaDark] = useState(false)

  function trocaTema() {
    setUseTemaDark(!useTemaDark)
  }

  return (
    <ThemeProvider theme={useTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} temaEsc={useTemaDark} />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
