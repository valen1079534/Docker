import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = {
        nombre, 
        email
      }
      axios.post('http://localhost:5000/usuario/registrar', data).then((response) => {
        console.log(response.data)
        if(response.status == 200){
          alert('Registro Exitioso')
        }else{
          (response.data)
        }
      })
    } catch (error) {
      console.log('error servidor', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>nombre</label>
        <input type="text" value={nombre}onChange={(e)  => setNombre(e.target.value)}/>

        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type='submit'>ENVIAR</button>
      </div>
    </form>
  )
}

export default App
