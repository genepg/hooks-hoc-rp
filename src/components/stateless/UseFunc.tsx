import React from "react";

const useAddOne = (number: number) => {
    return number + 1;
}

const useGreetingWithName = (greeting: string) => (name: string) => {
    return `${greeting} ${name}`;
}

const renderTitle = () => <h1>I'm Title</h1>

const MyApp: React.FC<any> = ({ name, number }) => {
    const addOneNumber = useAddOne(number)
    const greetingWithName = useGreetingWithName('hi')(name)
    return (
        <div>
            {renderTitle()}
            <h2>{greetingWithName}</h2>
            <h3>{addOneNumber}</h3>
        </div>
    ); 
}

export default MyApp;
