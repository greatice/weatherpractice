import React from 'react';
// const API_KEY = 'f527754a92e1b7ddc83207cbdc0b955b';
// class Form extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//         }
//       }
    
//     render(){
//         return(
//             <form onSubmit={this.props.getWeather}>
//                 <input type='text' name = 'city' placeholder='City...' />
//                 <br></br>
//                 <input type='text' name = 'country' placeholder='Country...' />
//                 <br></br>
//                 <button>
//                     Check Weather
//                 </button>
//             </form>
//         );
//     }
// } //This class also can be used but not concise enough, the code below is very simplify, please compare.


const Form = (props) => {
    return(
                    <form onSubmit={props.getWeather}>
                        <input type='text' name = 'city' placeholder='City...' />
                        <br></br>
                        <input type='text' name = 'country' placeholder='Country...' />
                        <br></br>
                        <button>
                            Check Weather
                        </button>
                    </form>
                );
}

export default Form;