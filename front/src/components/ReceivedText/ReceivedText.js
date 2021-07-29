import React, { Component } from 'react';

class ReceivedText extends Component {
    
    state = {
        signs : []
    };

    
    async componentDidMount() {
        var input="31" ;
        try { 
            const res = await fetch('http://localhost:8000/api/pic_to_sign/?pic='+input);
            const signs = await res.json();
            this.setState({
                signs
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <div>
                {this.state.signs.map(item => (
                        <h1>{item}</h1>                   
                ))} 
            </div>
       );
    }
}

export default ReceivedText