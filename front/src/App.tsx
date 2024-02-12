import React, { useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";

const App: React.FC = () => {
  const wsUrl = import.meta.env.WS_BACKEND_URL;

  useEffect(() => {
    const socket = io(wsUrl);
    socket.on("connect", () => {
      console.log("Connection made");
    });

  }, [wsUrl]);

  return (
    <>
      Hello World
    </>
  );
};

export default App;
