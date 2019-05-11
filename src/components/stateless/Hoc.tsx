import React, { ComponentType } from 'react';

interface NameAndNumber {
    name: string,
    number: number 
}

const numberAddOneHoc = (Component: ComponentType<NameAndNumber>) => {
    return ({ number, ...props }: NameAndNumber) => (
        <Component {...props} number={number + 1} />
    );
}

const greetingWithNameHoc = (greeting: string) => (Component: ComponentType<NameAndNumber>) => 
    ({ name, ...props }: NameAndNumber) => (
        <Component {...props} name={`${greeting}, ${name}`} />
    );

const addATitleHoc = (Component: ComponentType<NameAndNumber>) => (props: NameAndNumber) => (
    <React.Fragment>
        <h1>I'm Title</h1>
        <Component {...props} />
    </React.Fragment>
);


const MyApp: React.FC<NameAndNumber> = ({ name, number }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{number}</h3>
        </div>
    ); 
}

const WrappedComponent = addATitleHoc(greetingWithNameHoc('hello Hoc')(numberAddOneHoc(MyApp)))

export default WrappedComponent;
