import * as dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { MessagePacket } from "types/packets";

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*"}
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (message: MessagePacket) => {
    console.log(message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

});

httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
