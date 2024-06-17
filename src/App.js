import React, { useCallback, useEffect, useState, useRef } from 'react';
import { socket } from './socket';
import MessagesList from './components/MessagesList/MessagesList'
import NameInput from './components/NameInput/NameInput'
import MessageInput from './components/MessageInput/MessageInput'

function App() {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')
  // const [users, setUsers] = useState([])

useEffect(() => {
  if(username) {
    socket.auth = { username: username };
    socket.connect();
    socket.emit('needAllMessages')
  }
}, [username]) 

  useEffect(() => {
    function onAllMessages(allMessages) {
      setMessages(allMessages);
    }
    function onMessage(message) {
      setMessages(prev => prev.concat(message));
    }
    const onUsers = (users) => {
      // setUsers(users)
    }

    socket.on('allMessages', onAllMessages);
    socket.on('message', onMessage);
    socket.on('users', onUsers);

    return () => {
      socket.off('message', onMessage);
      socket.off('users', onUsers);
      socket.off('allMessages', onAllMessages);
    };
  }, []);


  const sendMessage = useCallback((messageText) => {
    socket.emit('newMessage', messageText)
  }, []) 

  const uploadFile = (file) => {
    socket.emit("upload", {file, fileName: file.name}, (status) => {
    });
  }

  const listRef = useRef()

  return (
    <div className="App">

      {!username && 
      <NameInput setUsername={setUsername}/>
      }
      {!!username && (
        <>
          <MessagesList 
            ref={listRef}
            messages={messages}
            username={username}
          />
          <MessageInput sendMessage={sendMessage} uploadFile={uploadFile}/>
        </>
      )}
    </div>
  );
}

export default App;
