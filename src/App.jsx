

import './App.css'
import Card from './assets/component/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [bebiData, setBebiData]=useState( [])
  const [nomberData, setNomberData]=useState([])


useEffect(()=>{

getData()

}, [nomberData])


const getData=()=>{
  axios
  .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomberData}`)
  .then((result) => {console.log(result.data.drinks)
    setBebiData(result.data.drinks) })
 .catch((error) => {console.error(error.data) 
})
 
}

const getBuscar=(e)=>{
e.preventDefault()
console.log(e.target[0].value);

setNomberData(e.target[0].value.toLowerCase())
}


  return (
    <div className="App">

<div className="card">
  
  <div className="input">
    <form onSubmit={(e)=>getBuscar(e)}>
<input type="text" placeholder='Buscar bebida'/>
<button type='submit'>  <img src="/src/assets/disparos.png" alt="" />    </button>
    </form>
  </div>
{bebiData !== null ?

 bebiData.map((caracter, index)=><Card
 key={`caracter${index}`}
 datas={caracter}

 />)

 : <div className='imagen'>
  <img src="/src/assets/bebida.jpg" alt="" />
 <h1>no hay concidencias</h1>
 </div>
  
    }

</div>
 
    </div>
  )
}

export default App
