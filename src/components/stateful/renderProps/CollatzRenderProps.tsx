import React, {Component} from "react";
import { CollatzWrapper } from './CollatzWrapper';

export class CollatzRenderProps extends Component<any, any> {
    initN = Math.floor(Math.random() * 100);
    // constructor(props: any) {
    //     super(props)
    //     // this.initN = Math.floor(Math.random() * 100); 
    // }
    render() {
        return (
            <CollatzWrapper initN={this.initN}>
                {(n: number, calcNext: any) => (
                    <>
                        <h1>{n}</h1>
                        <button onClick={calcNext}>next</button>
                    </>
                )}
            </CollatzWrapper>
        )
    }
}
