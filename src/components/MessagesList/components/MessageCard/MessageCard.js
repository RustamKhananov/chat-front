import React from 'react';
import './messageCard.css';

function MessageCard({message, username}) {

  return (
      <div className={username === message.author ? "messageCard_my" : 'messageCard_other'} >
        <p className='messageCard__author'><strong>{message.author}</strong></p>
        <p className='messageCard__date'>{message.createdAt}</p>
        {message.url ? 
          <p className='messageCard__text'><a href={message.url}>{message.text}</a></p> :
          <p className='messageCard__text'>{message.text}</p>
        }
      </div>
  );
}

export default MessageCard;