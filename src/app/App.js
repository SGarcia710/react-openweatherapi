import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'


import {WEATHER_KEY} from './keys'


class App extends Component {
  state = {
    humidity: '',
    temp: '',
    desc: '',
    wind: '',
    city: '',
    country: '',
    error: null
  }
  getWeather =async e => { 
    e.preventDefault();
    // console.log(e.target.elements);
    // console.log( city.value, country.value )
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value; 
    const lang = 'es';
    const units = 'metric';

    if(cityValue && countryValue) {
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&units=${units}&lang=${lang}&appid=${WEATHER_KEY}`;
      const response = await fetch(API_URL) //obtengo una respuesta en String
      const data = await response.json(); //String a json
      // console.log(this.state)
      this.setState({
        temp: data.main.temp,
        desc: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        null: null
      }, ()=> {console.log(this.state)})
    } else{ 
      this.setState({error: 'Por favor ingrese una ciudad y un pais.'})
    }

  }

  render() {
    return(
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm 
              getWeather={this.getWeather}
            />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    )
  }
}

export default App