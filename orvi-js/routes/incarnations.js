const express = require('express');
const router = express.Router();

const { getAllIncarnations, getIncarnation, createIncarnation, updateIncarnation, deleteIncarnation } = require('../controllers/incarnations');

router.route('/').post(createIncarnation).get(getAllIncarnations);
router.route('/:id').get(getIncarnation).delete(deleteIncarnation).patch(updateIncarnation);

module.exports = router;