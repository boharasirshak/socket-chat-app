import * as dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export default mysql.createPool({
  host: process.env.MYSQL_DB_HOST || "localhost",
  port: parseInt(process.env.MYSQL_DB_PORT || "3306"),
  user: process.env.MYSQL_DB_USER || "root",
  password: process.env.MYSQL_DB_PASS || "123456",
  database: process.env.MYSQL_DB_NAME || "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
