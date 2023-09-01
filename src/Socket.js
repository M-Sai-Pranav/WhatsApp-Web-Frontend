import io from 'socket.io-client';
let socket = null;
const createSocket = (email, callback) => {
  if(socket == null) {
    const socketio = io('http://localhost:4000', {
      auth: {
        token: 'mytoken',
        user: email
      },
    });
    socket = socketio;
    callback(socketio)
  }
  callback(socket)
}
export {createSocket, socket}
