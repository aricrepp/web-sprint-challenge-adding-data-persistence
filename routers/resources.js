const express = require('express');
const Resources = require('../models/resources');

const router = express.Router();

router.get('/resources', async (req, res, next) => {
  try {
    const resources = await Resources.find();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.get('/resources/:id', async (req, res, next) => {
  try {
    const resouces = await Resources.findById(req.params.id);
    if (!resouces) {
      return res.status(404).json({
        message: 'resouces not found',
      });
    }

    res.json(resouces);
  } catch (err) {
    next(err);
  }
});

router.post('/resources', async (req, res, next) => {
  try {
    const newresource = await Resources.add(req.body);
    // const newresource = await db('resources').where({ id }).first();

    res.status(201).json(newresource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
