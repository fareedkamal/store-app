import styled, { css } from 'styled-components'

const StyledBtn = styled.button`

border: 1px solid ${(props) => props.theme.color.primary};
font-size: ${({ theme }) => theme.fontSize.s};
padding:0.6em 1.4em;
color: ${(props) => props.color ? 'white' : props.theme.color.primary};
border-radius: 4px;
background-color:${(props) => props.color ? props.theme.color.secondary : 'white'};
transition: ease 0.5s;
width: fit-content;

${(props) => props.icon && css`
background-image: url(${props.icon});
background-size: 15px;
background-repeat: no-repeat;
padding-left: 40px;
background-position: 15px center;
`}

&:hover{
    background-color:${(props) => props.theme.color.primary};
    color: white
}
`

export const ActionButton = ({ onClick, title, color, icon, style }) => {
  return (
    <StyledBtn onClick={onClick} color={color} icon={icon} style={style} >{title}</StyledBtn>
  )
}
