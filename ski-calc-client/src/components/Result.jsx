import React from 'react';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

const Result = ({ skierCode, din }) => {
    return (
        <div>
            {skierCode && din !== null ? (
                <SuccessMessage  skierCode={skierCode} din={din}/>
            ) : (
                <ErrorMessage />
            )}
        </div>
    );
};

export default Result;