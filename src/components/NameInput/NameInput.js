import React, { useState } from 'react';
import './nameInput.css';


function NameInput({setUsername}) {
  const [text, setText] = useState('')

const handleChangeText = (ev) => {
  const {value} = ev.target
    setText(value)
}

  return (
      <div className="nameInput">
        <p>What is your name?</p>
        <input type="text" onChange={handleChangeText}/>
        <button onClick={() => setUsername(text)}>save</button>
      </div>
  );
}

export default NameInput;