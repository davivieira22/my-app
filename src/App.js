import React from "react";
import { ConteinerPai, Logo, ConteinerFilho, H1, P, InputPedido, Botao } from './style'
import Logo1 from './assets/imglogo1.png'
const App = () => {
  return (
  <ConteinerPai>
    
    <ConteinerFilho>

      <Logo src={Logo1} ></Logo>

      <H1>faça seu pedido </H1>

      <P>pedido</P>
      <InputPedido></InputPedido>

      <P>nome do cliente </P>
      <InputPedido></InputPedido>

      <Botao> novo pedido </Botao>

    </ConteinerFilho>










  </ConteinerPai>

  )


}

export default App;
