import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("users.db");

app.use(cors());
app.use(express.json());

db.exec(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);"
);

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  stmt.run(name, email);
  res.send({ message: "Usuário cadastrado!" });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
