const express = require('express');
const app = express();

app.use(express.json());

app.post('/complete', (req, res) => {
  const { prompt } = req.body;
  // ---- Your custom logic here ----
  const answer = `[MCP] Received prompt: ${prompt.slice(0, 50)}...`;
  res.json({ completion: answer });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`MCP listening on http://0.0.0.0:${PORT}`);
});
