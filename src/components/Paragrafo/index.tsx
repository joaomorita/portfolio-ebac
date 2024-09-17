import { P } from './styles'

export type Props = {
  children: string
  textAlign?: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}
const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  textAlign
}: Props) => (
  <P textAlign={textAlign} fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
