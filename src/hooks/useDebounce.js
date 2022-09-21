import { useState, useEffect } from "react";

const useDebounce = (init, delay) => {
    const [value, setValue] = useState(init);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            handleChange(init);
        }, delay);

        return () => clearTimeout(timer);
    }, [init, delay]);

    return value;
};

export default useDebounce;
