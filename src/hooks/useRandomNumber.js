import { useCallback } from 'react';

const useRandomNumbers = () => {
    const generateRandomNumbers = useCallback((min, max, count) => {
        return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }, []);

    return generateRandomNumbers;
};

export default useRandomNumbers;