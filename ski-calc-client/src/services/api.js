import axios from 'axios';

const API_URL = 'http://localhost:5000/calculate-din'; // Update with your server URL

export const calculateDin = async (weight, height, age, skierType, soleLength) => {
    try {
        const response = await axios.post(API_URL, {
            weight,
            height,
            age,
            skierType,
            soleLength
        });
        return response.data;
    } catch (error) {
        console.error('Error calculating DIN:', error);
        throw error;
    }
};