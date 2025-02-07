import { useState } from 'react';

const useCalculateDin = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const calculateDin = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/calculate_din`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setResult(result);
        } catch (error) {
            setError(error);
        }
    };

    return { result, error, calculateDin };
};

export default useCalculateDin;