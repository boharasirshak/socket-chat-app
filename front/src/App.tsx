import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

import { MessagePacket } from "./types/packets";

import "./App.css";

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket>();

  const sendMessage = () => {
    socket?.emit("message", {
      text: "text",
      from: {
        id: 1
      },
      to: {
        id: 2
      }
    } as MessagePacket);
  };

  useEffect(() => {
    const socket = io(import.meta.env.VITE_WS_BACKEND_URL);
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connection made");
    });

    return () => { 
      socket.disconnect(); 
    };

  }, []);

  return (
    <>
      Hello World


      <button onClick={sendMessage}>
        Send Message
      </button>
    </>
  );
};

export default App;
