'use client';

import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div> 
    );
}