import React from 'react';



// class Titles extends React.Component {
//     render(){
//         return ( 
//             <div>
//                 <h1>
//                     Weather App
//                 </h1>
//                 <p>
//                     To find out the temperature of where you want to know
//                 </p>
//             </div>
//         );
//     }

// } //This class also can be used but not concise enough, the code below is very simplify, please compare.


const Titles = (props)=> {
    return(
        <div>
                <h1>
                    Weather Check
                </h1>
                <p>
                    To find out the weather condition of where you want to know
                </p>
        </div>
    );

}

export default Titles;