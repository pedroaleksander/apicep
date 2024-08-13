import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = async(event) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
            if(!response.ok){
              throw new error("xiiii... endereço não encontrado!");
            }
            setEndereco(await response.json());

        } catch (error){
          console.error(error);

        }

  }

  return(
        <>
        <div className='container'>
        <br/>
          <h1>Busca do Endereço</h1>
          <input
            type = "number"
            placeholder='Digite seu CEP'
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <button onClick={handleBuscaCep}>
            Buscar
          </button>
          <div className='endereco'> 
            {endereco ? (<>
             <p>CEP: {endereco.cep}</p>
             <p>Logradouro: {endereco.logradouro}</p>
             <p>Complemento: {endereco.complemento}</p>
             <p>Bairro: {endereco.bairro}</p>
             <p>Localidade: {endereco.localidade}</p>
             <p>DDD: {endereco.ddd}</p>

                 </>) : null}
                 <br/><br/><br/>

          </div>
        </div>
        </>
  ) 
      }

export default App
