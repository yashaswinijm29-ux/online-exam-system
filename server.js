const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Example questions
const questions = [
  { id: 1, question: "What is 2 + 2?", options: ["3","4","5","6"], correct: "4" },
  { id: 2, question: "Capital of France?", options: ["Paris","London","Berlin","Madrid"], correct: "Paris" },
  { id: 3, question: "Which planet is Red Planet?", options: ["Venus","Mars","Jupiter","Saturn"], correct: "Mars" }
];

// Endpoint to fetch questions
app.get('/questions', (req, res) => {
  res.json(questions);
});

// Endpoint to submit student info + answers
app.post('/submit', (req, res) => {
  const { studentId, answers } = req.body;
  console.log("Student ID:", studentId);
  console.log("Answers:", answers);
  res.json({ message: "Exam submitted successfully!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});