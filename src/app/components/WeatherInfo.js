import React from 'react';

const WeatherInfo = props => { //componennte que solo mostrara datos.
  return (
    <div>
      {
        props.error &&
        <div className="alert alert-danger">
          <span>{props.error}</span>
        </div>
      }
      {
        props.temp ?
          <div className="card card-body mt-4">
            <span>
              Localizacion: {props.city}, {props.country}
            </span>
            <span>
              Temperatura: {props.temp} C, {props.desc}
            </span>
            <span>
              Humedad: {props.humidity}
            </span>
            <span>
              Velocidad del Viento: {props.wind}
            </span>
          </div>
        :
        <div className="card card-body mt-4">
          <span>No se ha enviado una solicitud aun.</span>
        </div>
      }
      
    </div>
  )
}
      
export default WeatherInfo;