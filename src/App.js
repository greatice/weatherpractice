import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';

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
  getWeather = async (e) => { //因为用了await，所以function必须是规定是 async的，异步的。
    e.preventDefault(); //await的对象必须是promise，fetch和axios返回的就是promise
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  // const api_call = await axios (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  // response.data.main.temp
  // 定义了 async的函数返回一个Promise（异步）的值（function 的 return type 被改变了）, 所以所有的需要调用这个函数的上层函数也需要定义async 关键字，因为只要底层引用过一个async，外层都要用。

  
   
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
        // forecasts: resizeBy.data.forecast.slice(0,10), //用来显示10个天气预报
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
        <div className = 'container'>
        <Titles 
        />
        <Form 
          getWeather = {this.getWeather}
        />
        <br></br>
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
        <Footer />
        </div>
      </div>
    );
  }
}



export default App;
