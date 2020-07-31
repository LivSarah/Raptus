import { useEffect, useState } from 'react';

export const usePromise = (promise, defaultValue=undefined) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        (async () => {
            try {
                setValue(await promise);
            } catch (error) {
                console.error(error);
            }
        })()
    }, []);

    return value;
};