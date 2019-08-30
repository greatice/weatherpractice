import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form>
                <input type='text' name = 'city' placeholder='City...' />
                <br></br>
                <input type='text' name = 'Country' placeholder='Country...' />
                <br></br>
                <button>
                    Search Weather
                </button>
            </form>
        );
    }

}

export default Form;