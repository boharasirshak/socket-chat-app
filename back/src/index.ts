import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

httpServer.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});