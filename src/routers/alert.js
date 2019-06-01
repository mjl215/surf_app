const express = require('express');
const Alert = require('../models/alert');
const auth = require('../middleware/auth');

const router = new express.Router();

// Get all alerts
router.get('/alerts', auth, async (req, res) => {

  try {
    const alerts = await Alert.find({ owner: req.user._id });
    res.send(alerts);
  } catch (error) {
    res.status(500).send();
  }
})

// Make Alert
router.post('/alerts', auth, async (req, res) => {
  const alert = new Alert({
    ...req.body,
    owner: req.user._id
  })
  try {
    await alert.save();
    res.status(201).send(alert);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get alert by ID
router.get('/alerts/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const alert = await Alert.findOne({ _id, owner: req.user._id })

    if (!alert) {
      return res.status(404).send();
    }

    res.send(alert)
  } catch (error) {
    res.status(500).send(error);
  }
});

//update alert by id
router.patch('/alerts/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['alertId'];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  });

  if (!isValidOperation) {
    return res.status(400).send({ erorr: 'invalid operation' });
  }

  try {
    const alert = await Alert.findOne({ _id: req.params.id, owner: req.user._id });

    //const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!alert) {
      return res.status(404).send();
    };

    updates.forEach((update) => {
      alert[update] = req.body[update]
    });
    await alert.save();

    res.send(alert);

  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
