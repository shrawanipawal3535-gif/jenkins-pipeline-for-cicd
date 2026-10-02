const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Day 2 of the DevOps Internship! Pipeline is working.');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
