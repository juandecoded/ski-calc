import React from 'react';

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
                <p>Unable to calculate DIN wit provided skier information.</p>
            )}
        </div>
    );
};

export default Result;