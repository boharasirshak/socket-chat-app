import * as dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT || 5500;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});