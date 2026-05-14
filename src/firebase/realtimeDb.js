import { getDatabase } from "firebase/database";
import app from "./config.js";

const db = getDatabase(app);
export default db;
