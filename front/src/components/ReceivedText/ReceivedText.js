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
            body: JSON.stringify({ user: 'image' })
        };
        const response = await fetch('https://signs2text-l7k3kehv6a-uc.a.run.app/sign2text', requestOptions);
        const res = await fetch('https://signs2text-l7k3kehv6a-uc.a.run.app/sign2text')
        console.log(res)
        const data = await response.json();
        console.log(data);
        this.setState({ test2: data });
        this.setState({ postId: data.id });
        this.setState({ test1: response });

    }

    render() {

        const { postId } = this.state;
        const { test1 } = this.state;
        const { test2 } = this.state;
        
        return (
            <div>
                <h1>Returned Id: {test2}</h1>


            </div>
        );
    }
}

export default ReceivedText