import React from 'react';

type HelloProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
};

function Hello({ name, mark, optional, onClick }: HelloProps) {
    const handleClick = () => onClick(name);

    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Hello.defaultProps = {
    mark: '!',
};

export default Hello;
