import React from 'react';

// class Weather extends React.Component {
//     render(){
//         return(
//             <div>
//             {this.props.city && this.props.country && <p>Location: {this.props.city} , {this.props.country}
//                </p> }
//             {this.props.temperature && <p>Current Temperature: {this.props.temperature} 
//                </p> }
//             {this.props.minTemp && <p>Mix Temperature: {this.props.minTemp} 
//                </p> }
//             {this.props.maxTemp && <p>Max Temperature: {this.props.maxTemp} 
//                </p> }
//             {this.props.humidity && <p>Humidity: {this.props.humidity} 
//                </p> }
//             {this.props.description && <p>Conditions: {this.props.description} 
//                </p> }
//             {this.props.error && <p>Note: {this.props.error} 
//                </p> }
//             </div>
//         );
//     }

// } //This class also can be used but not concise enough, the code below is very simplify, please compare.

const Weather = (props)=> {
                return(
                    <div>
                    {props.city && props.country && <p>Location: {props.city} , {props.country}
                       </p> }
                    {props.temperature && <p>Current Temperature: {props.temperature} 
                       </p> }
                    {props.minTemp && <p>Mix Temperature: {props.minTemp} 
                       </p> }
                    {props.maxTemp && <p>Max Temperature: {props.maxTemp} 
                       </p> }
                    {props.humidity && <p>Humidity: {props.humidity} 
                       </p> }
                    {props.description && <p>Conditions: {props.description} 
                       </p> }
                    {props.error && <p>Notice: {props.error} 
                       </p> }
                    </div>
                );
}

export default Weather;