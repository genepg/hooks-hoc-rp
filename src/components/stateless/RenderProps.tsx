import React from "react";
import { NameAndNumber } from "../../App";

const Wrapper: React.FC<any> = props => {
    const addOne = (number: number) => number + 1;
    const greetingWithName = (greeting: string) => (name: string) => `${greeting}, ${name}`
    const addATitle = () => <h1>I'm Title</h1>

    return (
        <>
            { props.render(addOne, greetingWithName, addATitle) }    
        </>
    )
}

const OrgComponent: React.FC<any> = ({ name, number, renderTitle }) => {
    return (
        <div>
            {renderTitle()}
            <h2>{name}</h2>
            <h3>{number}</h3>
        </div>
    ); 
}

const RenderPropsComponent: React.FC<NameAndNumber> = ({ name, number }) => {
    return (
        <Wrapper
            render={(addOne: any, greetingWithName: any, addATitle: any) => (
                <OrgComponent 
                    name={greetingWithName('hello RenderProps')(name)}
                    number={addOne(number)}
                    renderTitle={addATitle}
                />
            )}
        />
    ); 
}

export default RenderPropsComponent;
