const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuid = require('uuid').v4;

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
  res.json(db.concerts[req.params.id - 1]);
});

router.route('/concerts').post((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const id = uuid();
  const newConcert = { id: id, performer, genre, price, day, image };
  db.concerts.push(newConcert);
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').put((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  const concert = db.concerts[req.params.id - 1];
  concert.performer = performer;
  concert.genre = genre;
  concert.price = price;
  concert.day = day;
  concert.image = image;
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').delete((req, res) => {
  db.concerts.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});

module.exports = router;