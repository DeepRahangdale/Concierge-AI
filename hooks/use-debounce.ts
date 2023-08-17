import { useEffect , useState } from "react";

export function useDebounce<T>(value:T, delay?: number): T {
    const[debouncedValue , setDebouncedValue]=useState<T>(value);

    useEffect(() => {
        const timer=setTimeout (() => setDebouncedValue(value),
        delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value,delay]);
return debouncedValue;
};

// here we are using the debounce since while searching any text debounce
// help to change the url only when we write completing the text and
// it get update once the text is written i.e after the time  delay of 0.5 seconds which can be changes further accordingly 
// in short only when we finish typing the url will change 