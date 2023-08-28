import React, {Component} from 'react';
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

 //https://openweathermap.org/
 const Weather_apikey ="9df27cc73e9a75215624902625adc3c1";

 //https://jsonformatter.curiousconcept.com/
class App extends Component {
  
  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    wind: '',
    description: '',
    error: ''
  }

  shoWeather = async (e) => {
		e.preventDefault();
    const city = e.target.elements.fcity.value;
    const country = e.target.elements.fcountry.value;
   // console.log(city, country)
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Weather_apikey}`);
    const data = await api.json();

    if(city && country){
      this.setState({
        tempreature: data.main.temp, //from json file
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ''
    })
    }   
      else{
        this.setState({
          tempreature: '',
          city: '',
          country: '',
          humidity: '',
          wind: '',
          description: '',
          error: 'Please enter city and country'
      })
      }
   
  }

render(){
  return (
    <div className="App">
      <h1 className="appheading"><span class="fas fa-cloud-sun-rain"></span>Weather Finder</h1>
          <Form showbtn={this.shoWeather}/>
          <Weather 
            tmp = {this.state.tempreature}
            city = {this.state.city}
            cont = {this.state.country}
            hum = {this.state.humidity}
            wnd = {this.state.wind}
            desc = {this.state.description}
            err = {this.state.error}

          />
    </div>
  );
}
}

export default App;
