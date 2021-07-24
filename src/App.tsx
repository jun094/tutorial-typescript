import React from 'react';
import Hello from './Hello';

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return <Hello name="jun" onClick={onClick} />;
}

export default App;
