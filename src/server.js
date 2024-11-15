const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Route to handle analysis
app.post('/analyze', (req, res) => {
  const surveyResponses = req.body.responses;

  // Spawn Python script for analysis
  const python = spawn('python3', ['analyze.py']);

  // Send survey responses to Python script
  python.stdin.write(JSON.stringify(surveyResponses));
  python.stdin.end();

  let result = '';

  // Collect data from Python script
  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  // On script close, send result back to frontend
  python.on('close', () => {
    res.send(JSON.parse(result));
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
