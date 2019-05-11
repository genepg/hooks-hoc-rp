import { Component } from "react";

interface CollatzWrapperProps {
    initN: number;
    children: any;
}

export class CollatzWrapper extends Component<CollatzWrapperProps, any> {
    constructor(props: any) {
        super(props)
        this.state = { n: this.props.initN }
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
    render(): any {
        return this.props.children(this.state.n, this.calcNext)
    }
}