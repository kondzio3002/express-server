const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuid = require('uuid').v4;

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
  res.json(db.seats[req.params.id - 1]);
});

router.route('/seats').post((req, res) => {
  const { day, seat, client, email } = req.body;
  const id = uuid();
  const newSeat = { id: id, day, seat, client, email };
  db.seats.push(newSeat);
  res.json({ message: 'OK' });
});

router.route('/seats/:id').put((req, res) => {
  const { day, seat, client, email } = req.body;
  const seatId = db.seats[req.params.id - 1];
  seatId.day = day;
  seatId.text = seat;
  seatId.client = client;
  seatId.email = email;
  res.json({ message: 'OK' });
});

router.route('/seats/:id').delete((req, res) => {
  db.seats.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});

module.exports = router;