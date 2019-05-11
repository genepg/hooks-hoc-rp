import React, { Component, ComponentType } from 'react';

export function withCalcNext(Comp: ComponentType<any>, initN: number) {
    return class extends Component<any, any> {
        constructor(props: any) {
            super(props)
            this.state = { n: initN }
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
            return <Comp {...this.props} n={this.state.n} calcNext={this.calcNext} />
        }
    }
}
