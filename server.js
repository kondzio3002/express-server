const express = require('express');
const cors = require('cors');
const uuid = require('uuid').v4;
const db = require('./db');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/testimonials', (req, res) => {
  res.json(db.testimonials);
});

app.get('/testimonials/random', (req, res) => {
  res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

app.get('/testimonials/:id', (req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

app.post('/testimonials', (req, res) => {
  const { author, text } = req.body;
  const id = uuid();
  const newTestimonial = { id: id, author, text };
  db.testimonials.push(newTestimonial);
  res.json({ message: 'OK' });
});

app.put('/testimonials/:id', (req, res) => {
  const { author, text } = req.body;
  const testimonial = db.testimonials[req.params.id - 1];
  testimonial.author = author;
  testimonial.text = text;
  res.json({ message: 'OK' });
});

app.delete('/testimonials/:id', (req, res) => {
  db.testimonials.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});


app.get('/concerts', (req, res) => {
  res.json(db.concerts);
});

app.get('/concerts/:id', (req, res) => {
  res.json(db.concerts[req.params.id - 1]);
});

app.post('/concerts', (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const id = uuid();
  const newConcert = { id: id, performer, genre, price, day, image };
  db.concerts.push(newConcert);
  res.json({ message: 'OK' });
});

app.put('/concerts/:id', (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const concert = db.concerts[req.params.id - 1];
  concert.performer = performer;
  concert.genre = genre;
  concert.price = price;
  concert.day = day;
  concert.image = image;
  res.json({ message: 'OK' });
});

app.delete('/concerts/:id', (req, res) => {
  db.concerts.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});


app.get('/seats', (req, res) => {
  res.json(db.seats);
});

app.get('/seats/:id', (req, res) => {
  res.json(db.seats[req.params.id - 1]);
});

app.post('/seats', (req, res) => {
  const { day, seat, client, email } = req.body;
  const id = uuid();
  const newSeat = { id: id, day, seat, client, email };
  db.seats.push(newSeat);
  res.json({ message: 'OK' });
});

app.put('/seats/:id', (req, res) => {
  const { day, seat, client, email } = req.body;
  const seatId = db.seats[req.params.id - 1];
  seatId.day = day;
  seatId.text = seat;
  seatId.client = client;
  seatId.email = email;
  res.json({ message: 'OK' });
});

app.delete('/seats/:id', (req, res) => {
  db.seats.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});


app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});