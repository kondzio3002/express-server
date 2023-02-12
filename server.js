const express = require('express');
const cors = require('cors');
const uuid = require('uuid').v4;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const db = [
  { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
  { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
  { id: 3, author: 'Adam Snow', text: 'Successful cooperation!' },
  { id: 4, author: 'Danny Nitro', text: 'It promise great cooperation.' },
  { id: 5, author: 'Angelina Nobel', text: 'Make money!' },
  { id: 6, author: 'Anna Maj', text: 'Good job.' },
];

app.get('/testimonials', (req, res) => {
  res.json(db);
});

app.get('/testimonials/random', (req, res) => {
  res.json(db[Math.floor(Math.random() * db.length)]);
});

app.get('/testimonials/:id', (req, res) => {
  res.json(db[req.params.id - 1]);
});

app.post('/testimonials', (req, res) => {
  const { author, text } = req.body;
  const id = uuid();
  const newTestimonial = { id: id, author, text };
  db.push(newTestimonial);
  res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {
  const { author, text } = req.body;
  const testimonial = db[req.params.id - 1];
  testimonial.author = author;
  testimonial.text = text;
  res.json({ message: 'OK' });
});

app.delete('/testimonials/:id', (req, res) => {
  db.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});