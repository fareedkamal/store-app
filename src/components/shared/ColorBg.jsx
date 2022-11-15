import styled from 'styled-components'

export const ColorBg = styled.div`
    background-color: ${(props) => props.theme.color.third};
    width: 100%;
    position: absolute;
    z-index: -1;
    height: inherit;
    left: 0;
`
