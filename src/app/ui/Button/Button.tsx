import React, { ReactNode } from 'react';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    type = 'button',
    href,
    target='_self',
    onClick,
    children,
    className = 'bg-green-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full',
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={className}>
                {children}
            </a>
        );
    }

    if (onClick) {
        return (
            <button type={type} onClick={onClick} className={className}>
                {children}
            </button>
        );
    }

    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;