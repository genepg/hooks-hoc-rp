import { useState } from 'react';

export function useCalcNext(initN: number): any[] {
    let [n, setN] = useState(initN)
    let calcNext = () => {
        if (n % 2) {
            n = 3 * n + 1
        } else {
            n = n / 2
        }
        setN(n)
    }
    return [n, calcNext]
}
