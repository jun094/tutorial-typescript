import React from 'react';
import Hello from './Hello';
import MyForm from './MyForm';

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
    return (
        <>
            <Hello name="jun" onClick={onClick} />
            <MyForm onSubmit={onSubmit} />
        </>
    );
}

export default App;


