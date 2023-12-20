import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componentes/navbar'
function App() {
  

  return (
   <div>
    <Navbar/>
    <h1>gerenciador de alunos</h1>
    <Outlet/>
   </div>
  )
}

export default App
