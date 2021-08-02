import React, { Component } from 'react';

class ReceivedText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null,
            test1: [],
            test2: []
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await fetch('https://reqres.in/api/posts', requestOptions);
        
        const data = await response.json();

        this.setState({ postId: data.id });
        this.setState({ test1: response });

    }

    render() {
        const { postId } = this.state;
        const { test1 } = this.state;
        const { test2 } = this.state;
        return (
            <div>
                <h1>Returned Id: {postId}</h1>
                <h1>{test2.map(home => <div>{home.name}</div>)}</h1>
                

            </div>
        );
    }
}

export default ReceivedText