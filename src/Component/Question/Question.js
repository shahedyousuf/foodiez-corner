import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>How React works?</h2>
            <p>React is popular and declarative JavaScript library.
                We can divide the whole UI into small parts called components.
                It also create a virtual DOM to compare with the original one. That's why React is efficient.
            </p>
            <h2>Props vs State</h2>
            <p>We use props to pass data from one component to other.
                We can pass object, function through props. State is variable and we can update the UI upon changing value.
                Props are immutable whereas State is mutable.
            </p>
            <h2>How useState() works?</h2>
            <p>useState() is a React hook. It returns us two things.
                A variable to store the data and a function to update the data value.
            </p>
        </div>

    );
};

export default Question;