export type MessagePacket = {
    text: string; // The message of the packet
    to: PeerPacket; // The recipient of the message
    from: UserPacket; // The sender of the message
  }
  
export type PeerPacket = {
    id: number; // The id of the recipient
    type: "private" | "group" | "channel"; // The type of the recipient
    username: string | null; // The username of the recipient
    first_name: string | null; // The first name of the recipient
    last_name: string | null; // The last name of the recipient
  }
  
export type UserPacket = {
    id: number; // The id of the user
    username: string | null; // The username of the user
    first_name: string | null; // The first name of the user
    last_name: string | null; // The last name of the user
  }
  