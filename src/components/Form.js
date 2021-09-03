import React, {useState} from "react"
import {v4 as uuid} from "uuid"; 
import PropType from "prop-types"
import "./styles/Form.css"

function Form({addCita, cita}){
  const [error, addError] = useState(false)

  const handleChange = e =>{
    addCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  } 
  const {petName, propietaryName, date, hour, symptom} = cita
  const submitCita = e =>{
    if(petName === "" || propietaryName ===""|| date ==="" || hour ===""||symptom ===""){
      addError(true)
      return
    } else {
      addCita({
        ...cita,
        completed: true
      })
      addError(false)
      addCita({
        ...cita,
        id:uuid(),
        completed: true
      })
      
      return
    }
  }

  return(
    <div className="Form__container">
      <h3>Crear Cita</h3>
      {error ? <p>Complete todos los datos, por favor</p> :null}
      <form className="Form">
        <label className="Form__container-label">Nombre Mascota</label>
        <br/>
        <input type="text" 
        placeholder="Nombre Mascota" 
        name="petName" 
        value={petName}
        onChange={handleChange}
        className="Form__container-input"
        ></input>
        <br />
        <label className="Form__container-label">Nombre Dueño</label>
        <br/>
        <input type="text" 
        placeholder="Nombre del Dueño de la Mascota" 
        name="propietaryName" 
        value={propietaryName}
        onChange={handleChange}
        className="Form__container-input"
        ></input>
        <br />
        <div className="Form__container-dateHour">
          <div>
            <label className="Form__container-label">Fecha</label>
            <br/>
            <input type="Date" 
          name="date" 
          value={date}
          onChange={handleChange}
          className="Form__container-input"
          ></input>
          </div>
          <div>
          <label className="Form__container-label">Hora</label>
          <br/>
          <input type="time" 
          name="hour" 
          value={hour}
          onChange={handleChange}
          className="Form__container-input"
          ></input>
          </div>
        </div>
        <br />
        <label className="Form__container-label">Sintomas</label>
        <br/>
        <textarea placeholder="Escriba los sintomas de su mascota" 
        name="symptom" 
        value={symptom}
        onChange={handleChange}
        className="Form__container-input"
        ></textarea>
        <br />
        <div className="Form__container-centerB">
          <button type="button" 
        onClick={submitCita}
        className="Form__container-button"
        >Agregar Cita</button>
        </div>
      </form>
    </div>
  )
}
Form.propTypes = {
  addCita: PropType.func.isRequired,
  cita: PropType.object
}
export default Form;
