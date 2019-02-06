import React from 'react';
import { Link } from "react-router-dom";

const DefaultButton = ({title, to, className, addStyles}) => {
    return (
        <Link
            className={!className ? 'link-default' : className}   
            to={to}
            {...addStyles}
        >
        {title}
        </Link>
    );
}

export default DefaultButton;
