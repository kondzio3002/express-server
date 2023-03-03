const mongoose = require('mongoose');

const testimonialSchema = new mongoose.model({
  author: { type: String, required: true },
  text: { type: String, required: true}
});

module.exports = mongoose.model('Testimonial', testimonialSchema);