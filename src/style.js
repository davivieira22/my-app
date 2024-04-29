import styled from 'styled-components'

export const ConteinerPai = styled.body`
width: 100%;
height:100vh;
background-color:black;
background-size: cover;

`
export const Logo = styled.img` 
width:242px ;
height: 224px;
margin-top: 24px;

`
export const ConteinerFilho = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:18px;

`
export const H1 = styled.h1`
font-size:28px ;
font-weight:700 ;
line-height:33px ;
align-items: center;
color: rgba(255, 255, 255, 1);

`
export const P = styled.p`
font-size:18px ;
font-weight:700 ;
line-height:22px ;
letter-spacing:-0.41px ;
color: rgba(238, 238, 238, 1);
margin-right: 220px;
    margin-bottom: -12px;
`
export const InputPedido = styled.input`
width:342px ;
height:58px;
border-radius:14px;
color:rgba(255, 255, 255, 1);
background-color:rgba(255, 255, 255, 0.25);
font-size:20px ;
font-weight:300;
line-height:22px;
cursor:pointer;

`

export const Botao = styled.button`
width:342px ;
height:68px ;
gap:14px;
background-color: rgba(217, 56, 86, 1);
font-size:17px;
font-weight:900; 
line-height: 2,5px;
align-items: center;
color:rgba(255, 255, 255, 1);
cursor: pointer;
border-radius: 8px;
border:1px solid rgb(2,1111,222,2);
`