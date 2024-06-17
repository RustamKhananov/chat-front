import { io } from 'socket.io-client';

const URL = 'https://chat-back-7ln6.onrender.com';

export const socket = io(URL);