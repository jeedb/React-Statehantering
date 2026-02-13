import { useState } from 'react';

function LivePreview() {
    const maxLength = 50;
    const [text, setText] = useState('');

    const handleChange = (event) => {
        if (event.target.value.length <= maxLength) {
        setText(event.target.value);
    }
    };

    const clearText = () => {
        setText('');
    };
   


    return (
        <div style={{ padding: '20px'}}>
            <h2>Live Preview</h2>

            <input type="text" 
            value={text} 
            onChange={handleChange} 
            placeholder='Din text. '
            />
            <p>Antal tecken: {text.length}</p>

            <button onClick={clearText}>Clear</button>

            <p>
                Du har skrivit: {text || "Inget."}
            </p>
        </div>
    );
}

export default LivePreview;