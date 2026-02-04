import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// health-check
app.get("/health", (req, res) => {
  res.send("OK");
});

// логирование (на будущее)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
