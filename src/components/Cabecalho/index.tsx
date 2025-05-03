import { Cabecalho as Cabb } from './styles'

type Props = {
  trocaTema: () => void
  temaEsc: boolean
}

const Cabecalho = (props: Props) => {
  return (
    <>
      <Cabb>
        <h1>EBAC Jobs</h1>
        <button title="Trocar tema" onClick={props.trocaTema}>
          {!props.temaEsc ? 'tema claro' : 'tema escuro'}
        </button>
      </Cabb>
    </>
  )
}

export default Cabecalho
