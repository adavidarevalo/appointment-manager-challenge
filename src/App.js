import React, { Fragment, useState, useEffect } from "react"
import './App.css';
import Form from "./components/Form.js"
import Card from "./components/Card.js"


function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"))
  if(!citasIniciales){
    citasIniciales=[]
  }
  const[cita, addCita] = useState({
    petName: '',
    propietaryName: '',
    date: '',
    hour: '',
    symptom: '',
    id:"",
    completed: false
  })

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem("citas", JSON.stringify(allcita))
    }else {
      localStorage.setItem("citas", JSON.stringify([]))
    }
  })

  const[allcita, addCitas] = useState(citasIniciales)
  const AgregarCita = () =>{
    addCitas([
      ...allcita,
      cita
    ])
    addCita({
      completed: false
    })
    addCita({
      petName: '',
      propietaryName: '',
      date: '',
      hour: '',
      symptom: '',
      id:"",
    })
  }
  const deleteCita = id => {
    const searchCitas = allcita.filter(citas=>(citas.id !== id))
    addCitas(searchCitas)
  } 
  return (
    <Fragment>
      <h2 className="app_title">Administrador de Pacientes</h2>
      <div className="app__container">
        <Form addCita={addCita} cita={cita}/>
      {cita.completed? AgregarCita() : null}
        <Card allcita={allcita} addCitas={addCitas} deleteCita={deleteCita}/>
      </div>
    </Fragment>
  );
}

export default App;
