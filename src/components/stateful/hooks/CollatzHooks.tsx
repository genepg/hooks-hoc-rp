import React from 'react';
import { useCalcNext } from './useCalcNext';

export function CollatzHooks(props: any) {
    let [n, calcNext] = useCalcNext(Math.floor(Math.random() * 100))

    return (
        <>
            <h1>{n}</h1>
            <button onClick={calcNext}>next</button>
        </>
    )
}
