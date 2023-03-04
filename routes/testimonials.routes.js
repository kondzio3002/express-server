const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testimontials.controller');

router.get('/testimonials', TestimonialController.getAll);
router.get('/testimonials/:id', TestimonialController.getById);
router.post('/testimonials', TestimonialController.postNew);
router.put('/testimonials/:id', TestimonialController.putById);
router.delete('/testimonials/:id', TestimonialController.deleteById);

module.exports = router;