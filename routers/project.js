const express = require('express');
const Project = require('../models/project');

const router = express.Router();

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get('/projects/:id', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        message: 'project not found',
      });
    }

    res.json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
