import React from 'react';
import ErrorMessage from './ErrorMessage';

const Result = ({ skierCode, din }) => {
    return (
        <div>
            <h2>Result</h2>
            {skierCode && din !== null ? (
                <p>
                    Skier Code: <strong>{skierCode}</strong><br />
                    DIN Value: <strong>{din}</strong>
                </p>
            ) : (
                <ErrorMessage />
            )}
        </div>
    );
};

export default Result;