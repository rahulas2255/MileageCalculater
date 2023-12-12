
import { TextField,Button,Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [mileage,setMileage] = useState(0)
  const [kilometre,setKilometre] = useState(0)
  const [litre,setLitre] = useState(0)
 
  const [validKilometre,setValidKilometre] = useState(true)
  const [validLitre,setValidLitre] = useState(true)
  

  
  const validateUserInputs = (e)=>{
    const {name,value} = e.target 
    console.log(`${name} , ${typeof value}`);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/)){
      //valid
      if(name==='kilometre'){
        setKilometre(value)
        setValidKilometre(true)
      }else{
        setLitre(value)
        setValidLitre(true)
      }
    }else{
      //invalid
      if(name==='kilometre'){
        setKilometre(value)
        setValidKilometre(false)
      }else{
        setLitre(value)
        setValidLitre(false)
      }
    }
  }
  const handleReset = ()=>{
    setKilometre(0)
    setLitre(0)
    setMileage(0)
    setValidKilometre(true)
    setValidLitre(true)
    
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!kilometre || !litre){
      alert("Please fill the form completely")
    }else{
      setMileage(kilometre/litre)
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light p-5 rounded'>
    <h1 style={{height:'55px'}}>Fuel Mileage Calculater</h1>
    <p>Calculate your vehicles Mileage</p>
    <div style={{width:'100%',height:'150px'}} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
      <h1 style={{height:'55px'}}>{mileage}km/litre</h1>
      <p className="fw-bolder">Mileage In Km</p>
    </div>
    <form className='mt-5' onSubmit={handleCalculate}>
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-kilometre" label="KM (Distance covered by the vehicle in kilometre)" variant="outlined" name='kilometre' value={kilometre || ""} onChange={e=>validateUserInputs(e)} />
      </div>
      {!validKilometre&&<div className='mb-3 text-danger fw-bolder'>
        Invalid Kilometre</div>}
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-litre" label="Litre (Fuel consumed in that distance in Litre)" variant="outlined" name='litre' value={litre || ""} onChange={e=>validateUserInputs(e)} />
      </div>
      {!validLitre&&<div className='mb-3 text-danger fw-bolder'>
        Invalid </div>}      
      <Stack direction={'row'} spacing={2}>
      <Button type='submit' style={{height:'70px',width:'50%'}} className='bg-dark' variant="contained" disabled= {validKilometre&&validLitre?false:true}>CALCULATE</Button>
      <Button onClick={handleReset} style={{height:'70px',width:'50%'}} className='text-dark' variant="outlined">RESET</Button>
      </Stack>
      </form>

    </div>
    
    </div>
  )
}

export default App
