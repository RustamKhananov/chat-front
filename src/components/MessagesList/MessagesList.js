import React, { useRef, useEffect } from 'react';
import './messagesList.css';
import MessageCard from './components/MessageCard/MessageCard'


function MessagesList({messages, username}) {
  const listRef = useRef()

  useEffect(() => {
    listRef.current.scrollTo(0, listRef.current.scrollHeight);
  }, [messages])

  return (
      <div className="messagesList" ref={listRef}>
        {messages.map(message =>  <MessageCard key={message.id} message={message} username={username}/>)}
      </div>
  );
}

export default MessagesList;