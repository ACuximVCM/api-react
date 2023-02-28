import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import './css/styles.css';

const CounterApp = ({value}) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        </>
    );
}

CounterApp.propTypes ={
    value : PropTypes.number.isRequired
}

export default CounterApp;