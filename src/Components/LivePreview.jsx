import { useState } from 'react';

function LivePreview() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div style={{ padding: '20px'}}>
            <h2>Live Preview</h2>

            <input type="text" 
            value={text} 
            onChange={handleChange} />
            <p>{text}</p>
        </div>
    );
}

export default LivePreview;