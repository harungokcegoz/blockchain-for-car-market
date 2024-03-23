import React from 'react';

type Props = {
    type: 'button' | 'submit' | 'reset';
    text: string;
    onClick?: () => void;
}

const Button = ({ onClick, text, type }: Props) => {
    return (
        <button 
            className="bg-orange-700 hover:bg-orange-600 text-white text-sm font-normal font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type={type} 
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;