import React, { useState,useEffect } from "react";
import { ConteinerPai, Logo, ConteinerFilho,  Menu } from './style'
import Logo2 from '../../assets/imglogo2.png'
import Lixeira from '../../assets/lixeira.svg'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import H1 from '../../components/Titulo'
import Botao from '../../components/botao'

const Index = () => {
  const [Pedido, setPedido] = useState([]);
 const Navigate = useNavigate()




  const DeleteRequest =  async (pedidosId) => {

    await Axios.delete(`http://localhost:3001/user/${pedidosId}`)

    const myMenu = Pedido.filter(i => i.id !== pedidosId)

    setPedido(myMenu)
  }
  
  useEffect(()=>{
    const fet= async ()=>{   
   const { data: myOrder } = await Axios.get('http://localhost:3001/user')
    setPedido(myOrder)
}
fet()

  },[])

const MyNavigate=()=>{
  Navigate('/')
}
  return (
    <ConteinerPai>

      <ConteinerFilho>

        <Logo src={Logo2} />

        <H1>pedidos </H1>
        <ul>

          {Pedido.map((pedidos) => (

            <Menu key={pedidos.id} >

              <p><span>pedido:</span> {pedidos.order}
              <br/>
              <br/>
               <span>nome:</span> {pedidos.clientName}</p>

              <button onClick={() => DeleteRequest(pedidos.id)}><img alt="lata-de-lixo" src={Lixeira} /> </button>
            </Menu>

          ))}

        </ul>
        <Botao onClick={MyNavigate}>voutar </Botao> 
      </ConteinerFilho>










    </ConteinerPai>

  )


}

export default Index;

// { id: Math.random(), pedido: '1 x Baicon, 2 coca-cola ', clientName: 'laura' },