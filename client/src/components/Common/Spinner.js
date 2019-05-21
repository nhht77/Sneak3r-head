import React from 'react';
import spinner from './spinner.gif';

const Spinner = ({width, src = spinner}) => {
    return (
        <div>
            <img
                src={src}
                style={{ width: `{${width} ? ${width} :200px}`, margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    );
}

export default Spinner;
