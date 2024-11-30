const express = require('express');
const router = express.Router();
const { createComponent, getAllComponents, updateStatus, deleteComponent } = require('../controllers/componentController');

router.post('/components', createComponent);
router.get('/components', getAllComponents);
router.patch('/components/:id/status', updateStatus);
router.delete('/components/:id', deleteComponent);

module.exports = router;