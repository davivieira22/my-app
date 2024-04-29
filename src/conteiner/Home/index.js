import React, { useState, useRef } from "react";
import { ConteinerPai, Logo, ConteinerFilho,  P, InputPedido } from './style'
import { useNavigate } from "react-router-dom";
import Logo1 from '../../assets/imglogo1.png'
import H1 from '../../components/Titulo'
import Axios from 'axios'
import Botao from '../../components/botao'
const Index = () => {
  const [Pedido, setPedido] = useState([]);
  const inputName = useRef()
  const InputMenu = useRef()
  const Navigate = useNavigate()

  const Addpedido = async () => {
    const { data: order } = await Axios.post('http://localhost:3001/user', {
      order: InputMenu.current.value,
      clientName: inputName.current.value,
    })

    setPedido([...Pedido, order])

    Navigate('/pedidos')

  }





  return (
    <ConteinerPai>

      <ConteinerFilho>

        <Logo src={Logo1} />

        <H1>faça seu pedido </H1>

        <P>seu pedido aqui </P>
        <InputPedido ref={InputMenu}></InputPedido>

        <P>seu nome aqui </P>
        <InputPedido ref={inputName} ></InputPedido>

        <Botao is={true} onClick={Addpedido}> novo pedido </Botao>





      </ConteinerFilho>










    </ConteinerPai>

  )


}

export default Index;

// { id: Math.random(), pedido: '1 x Baicon, 2 coca-cola ', clientName: 'laura' },