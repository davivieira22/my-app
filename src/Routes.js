import React from 'react'
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Home from './conteiner/Home'
import Pedidos from './conteiner/pedidos'
const Myroutes = ()=>{
return(
<Router>

    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/pedidos' element={<Pedidos/>}/>
    </Routes>


</Router>
)



}
export default Myroutes;