import styled from 'styled-components'

export const ConteinerPai = styled.div`
width: 100%;
height:100%;
min-height:100vh;
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
export const Menu= styled.li`
display: flex;
margin-bottom: 10px;
width:342px ;
height:110px;
border-radius:14px;
background-color:rgba(255, 255, 255, 0.25);
justify-content:space-around ;
padding:10px;
p{
font-size:20px ;
font-weight:300;
line-height:22px;
color:rgba(255, 255, 255, 1);
}
img{
    width:30px;
cursor:pointer;
};
button{
    background:none;
    border:none;
};

span{
    color:rgb(0,0,0);
}



  `