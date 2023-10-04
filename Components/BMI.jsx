import React, { useState } from 'react'

const BMI = () => {
  
    const[state, setState]=useState({
        weight:"",
        height:"",
        bmi:""
    })

    const [condition ,setCondition]=useState("")
  
    const handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
      console.log({...state,[e.target.name]:e.target.value})

    }

    const handleCalculate=()=>{
       state.bmi= ((state.weight/state.height**2)).toFixed(1)

       if(state.bmi<18.5){
           setCondition("Underweight")
       }else if(state.bmi<=24.9){
        setCondition("Normal Wight")
       }else{
          setCondition("Overwight")
       }
      
       setState({weight:"",height:"", bmi:state.bmi})

    }

  
    return (

    <div>
           <h3>BMI Calculator</h3>
        <p>Weight (Kg) : <input type='number' name='weight' value={state.weight} onChange={handleChange}/></p>   
        <p>Height (m) : <input type='number' name='height' value={state.height} onChange={handleChange}/></p>   
        <button type="button" className="btn btn-light" id='btn' onClick={handleCalculate}>Calculate</button>

        <p>Your BMI is: {state.bmi}</p>
        <p>Wight Standard: {condition}</p>

    </div>
  )
}

export default BMI