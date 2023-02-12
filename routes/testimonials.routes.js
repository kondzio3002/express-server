const express = require('express');
const router = express.Router();
const db = require('./../db');
const uuid = require('uuid').v4;

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
  res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

router.route('/testimonials').post((req, res) => {
  const { author, text } = req.body;
  const id = uuid();
  const newTestimonial = { id: id, author, text };
  db.testimonials.push(newTestimonial);
  res.json({ message: 'OK' });
});

router.route('/testimonials/:id').put((req, res) => {
  const { author, text } = req.body;
  const testimonial = db.testimonials[req.params.id - 1];
  testimonial.author = author;
  testimonial.text = text;
  res.json({ message: 'OK' });
});

router.route('/testimonials/:id').delete((req, res) => {
  db.testimonials.splice(req.params.id - 1, 1);
  res.json({ message: 'OK' });
});

module.exports = router;