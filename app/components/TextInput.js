'use client'
import { useState } from 'react';

export default function TextInput() {
  const [text, updateText] = useState('');

  // function handleTextChange(e) {
  //   updateText(e.target.value);
  // }

  return (
    <div>
      <input type="text" value={text} onChange={e => updateText(e.target.value)} />
    </div>
  );
}