import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderLink = styled(Link)`
    color:${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: ${(props) => props.theme.fontWeight.l};
    transition: color ease 0.5s;
    cursor: pointer;
    &:focus,&:hover{
      color: #c19c6f;
    }
    &:focus{
      border-bottom: 3px solid #c19c6f;
    }

`
