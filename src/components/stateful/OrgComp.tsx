import React, { Component } from 'react';

interface CollatzRandomState {
    n: number;
}

export default class CollatzRandom extends Component<{}, CollatzRandomState> {
    constructor(props: any) {
        super(props)
        let n: number = Math.floor(Math.random() * 100)
        this.state = { n }
    }
    calcNext = () => {
        let { n } = this.state
        if (n % 2) {
            n = 3 * n + 1
        } else {
            n = n / 2
        }
        this.setState({ n })
    }
    render() {
        return (
            <>
                <h1>{this.state.n}</h1>
                <button onClick={this.calcNext}>next</button>
            </>
        )
    }
}