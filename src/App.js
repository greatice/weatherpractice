import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'f527754a92e1b7ddc83207cbdc0b955b';
class App extends React.Component {
 
  getWeather = async () => {
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}



export default App;
