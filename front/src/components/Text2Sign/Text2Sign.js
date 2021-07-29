import React, { Component } from 'react';

class Text2Sign extends Component {
    
    state = {
        translated : []
    };

    
    async componentDidMount() {
        var input="حنان" ;
        try { 
            const res = await fetch('http://localhost:8000/api/text_to_sign/?text='+input);
            const translated = await res.json();
            this.setState({
                translated
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <div>
                {this.state.translated.map(item => (
                        <img src={"Assets/jpg/signs/"+item}></img>                   
                ))} 
            </div>
       );
    }
}

export default Text2Sign