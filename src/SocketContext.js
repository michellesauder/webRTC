import React, { createContext, useState, useRef, useEffect} from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((currentStream) => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
          })
        socket.on('me', (id) => setMe(id));
        socket.on('calluser', ({ from, name: callerName, signal }) => {
          setCall({ isReceivingCall: true, from, name: callerName, signal });
        });
      }, []);

      console.log({call})



    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream })

        //once we recieve a signal --> establish connection --> connect
        peer.on('signal', (data) => {
            socket.emit('answercall', {signal: data, to: call.from})
        });

        //set up the other persons stream that we will connect to the iFrame
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        //our current connection is equal to our current peer connection
        connectionRef.current = peer;

    }
    const callUser = (id) => {
        //set peer to true bc we are the person calling
        const peer = new Peer({ initiator: true, trickle: false, stream });

        //once we recieve a signal --> establish connection --> connect
        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name})
        });

        //set up the other persons stream that we will connect to the iFrame
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);
            peer.signal = signal;
        });

        connectionRef.current = peer;

    } 

    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        //so we can connect to another user later
        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{
            callAccepted,
            call,
            myVideo,
            userVideo,
            name,
            stream,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export { ContextProvider, SocketContext }