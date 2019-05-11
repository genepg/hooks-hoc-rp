import React, { Component } from 'react';
import { withCalcNext } from './withCalcNext';

export const CollatzHOC = withCalcNext(
    class Collatz extends Component<{ n: number, calcNext: any}> {
        render() {
            return (
                <>
                    <h1>{this.props.n}</h1>
                    <button onClick={this.props.calcNext}>next</button>
                </>
            )
        }
    },
    Math.floor(Math.random() * 100)
)