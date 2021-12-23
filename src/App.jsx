import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import api from './services/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function App() {

  const [number, setNumber] = useState('')
  const [data, setdata] = useState({})

  async function handle() {
    
    if (number == '') {
      toast.error('Preencha o formulário!',{position: toast.POSITION.BOTTOM_CENTER})
      return
    }

    try{
      const response = await api.get(number)
      setdata(response.data[0])
      setNumber('')
      toast.success('Dados encontrado com sucesso!',{position: toast.POSITION.TOP_RIGHT})
    } catch {
      toast.error('Erro não foi possível localizar os dados!',{position: toast.POSITION.BOTTOM_CENTER})
    }
    
  }
  
  return (
    <div className="container">
      
      <h1 className="title">BUSCADOR DE DADOS DO BI</h1>

      <div className="containerInput">
        <input 
          type="text"
          value={number}
          onChange={ e => setNumber(e.target.value) }
          placeholder="Informe seu numero do BI..."
        />

        <button type="button" className='buttonSearch' onClick={ handle }>
          <FiSearch size={25} color='#fff' />
        </button>

      </div>
      {Object.keys(data).length > 0 &&(
        <main className='main'>
          <h2>Nº: {data.ID_NUMBER}</h2>
          <span>Primeiro nome: {data.FIRST_NAME} </span>
          <span>Sobre nome: {data.LAST_NAME} </span>
          <span>Genero: {data.GENDER_NAME} </span>
          <span>Data de nascimento: {data.BIRTH_DATE} </span>
        </main>
      )}

    </div>
  );
}

export default App;
