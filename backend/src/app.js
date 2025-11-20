import express from "express";
import mathRoutes from "./math.js";
import quoteRoutes from "./quotes.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express", name: 'Vaishnavi' });
});

// Check health status
app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

// Get current time 
app.get("/api/time", (req, res) => {
  const currentTime = new Date().toLocaleDateString();
  res.json({ serverTime: currentTime });
});

app.use("/math", mathRoutes);
app.use("/quotebook", quoteRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});