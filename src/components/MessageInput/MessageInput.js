import React, { useState } from 'react';
import './messageInput.css';


function MessageInput({sendMessage, uploadFile}) {
  const [text, setText] = useState('')

const handleChangeText = (ev) => {
  const {value} = ev.target
    setText(value)
}

const handleSendMessage = () => {
  sendMessage(text)
  setText('')
}

const handleChangeFile = (ev) => {
  const file = ev.target.files[0]
  if(file) {
    uploadFile(file)
  }
  const dt = new DataTransfer()
  ev.target.files = dt.files
}

const handleKeyDown = (ev) => {
  if(ev.code === 'Enter') {
    handleSendMessage()
  }
}

  return (
      <div className="messageInput">
        <input type="text" onChange={handleChangeText} value={text} onKeyDown={handleKeyDown}/>
        <button onClick={handleSendMessage}>send</button>
        <span>&nbsp;OR&nbsp;</span>
        <input type='file' onChange={handleChangeFile} id='file-input' hidden/>
        <button><label for="file-input">upload file</label></button>
      </div>
  );
}

export default MessageInput;