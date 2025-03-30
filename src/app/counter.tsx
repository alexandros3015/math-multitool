"use client";

import { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-4 bg-gray-900'>
      <h1 className='text-2xl font-bold'>Counter</h1>
      <p>You have clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded transition active:scale-95'
        >Click me</button>
    </div>
  );
}