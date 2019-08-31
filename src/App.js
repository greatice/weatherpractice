import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f527754a92e1b7ddc83207cbdc0b955b';
class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
        temperature : undefined,
        minTemp : undefined,
        maxTemp : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
   
    if (city && country){
      console.log(data);//然后先运行一次在chrome的console里面看看data到底获取到了什么数据，这些数据又有什么结构，怎么显示到网页上二不是到console上面。
      this.setState({
        temperature: data.main.temp,
        minTemp : data.main.temp_min,
        maxTemp : data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:''
    });
    }
    else {
      console.log(data);
      this.setState({
        temperature: undefined,
        minTemp : undefined,
        maxTemp : undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:'Please fill the information as required'
      });
    }
  }
  render() {
    return (
      <div>
        <Titles 
        />
        <Form 
          getWeather = {this.getWeather}
        />
        <Weather 
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          minTemp = {this.state.minTemp}
          maxTemp = {this.state.maxTemp}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}



export default App;
