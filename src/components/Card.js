import React from "react"
import "./styles/Card.css"
import PropType from "prop-types"

function Card({ allcita, addCitas, deleteCita }){
    const title = allcita.length === 0 ? <p className="card__title">No hay citas</p> :<p className="card__title">Sus citas</p>
    return(
        <div className="card__container">
            <h2>{title}</h2>
            {allcita.map(cita=>(
                <div key={cita.id} className="card__block">
                    <p className="card__block-data">Mascota: <span>{cita.petName}</span></p>
                    <p className="card__block-data">Dueño: <span>{cita.propietaryName}</span></p>
                    <p className="card__block-data">Fecha: <span>{cita.date}</span></p>
                    <p className="card__block-data">Hora: <span>{cita.hour}</span></p>
                    <p className="card__block-data">Sintomas: <span>{cita.symptom}</span></p>
                    <div className="card__block-centerB">
                      <button className="card__block-button" onClick={()=> deleteCita(cita.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
Card.propTypes = {
    allcita: PropType.array,
    addCitas: PropType.func.isRequired,
    deleteCita: PropType.func
  }
export default Card;