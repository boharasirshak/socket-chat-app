import React, { useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    const socket = io(import.meta.env.VITE_WS_BACKEND_URL);

    socket.on("connect", () => {
      console.log("Connection made");
    });

  }, []);

  return (
    <>
      Hello World
    </>
  );
};

export default App;
