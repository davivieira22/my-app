import styled from "styled-components";


export const Botao = styled.button`
width:342px ;
height:68px ;
gap:14px;
background-color:${props => props.is ?'rgba(217, 56, 86, 1)':'rgba(55, 55, 255, 25)' };
font-size:17px;
font-weight:900; 
line-height: 2,5px;
align-items: center;
color:rgba(255, 255, 255, 1);
cursor: pointer;
border-radius: 8px;
border:1px solid rgb(2,1111,222,2);
`