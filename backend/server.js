const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing

const PORT = 5000;

// A simple API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the backend! 👋" });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
