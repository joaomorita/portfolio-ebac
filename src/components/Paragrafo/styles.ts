import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  text-align: ${(props) =>
    props.textAlign ? props.textAlign + 'center' : props.textAlign + 'left'};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
