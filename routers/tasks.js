const express = require('express');
const Tasks = require('../models/tasks');

const router = express.Router();

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await Tasks.findById(req.params.id);
    if (!tasks) {
      return res.status(404).json({
        message: 'tasks not found',
      });
    }

    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
