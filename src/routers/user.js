const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');

const router = new express.Router();


//Make user
router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

//login user
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token }); //remove user later
  } catch (error) {
    res.status(400).send();
  }
})

//logout user
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })

    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

//Logout of all
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send(e);
  }
})


//Get user details
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

//Authentication user
router.post("/users/auth", auth, async (req, res) => {

  res.send({user: req.user, token: req.token});
})

//Delete users
router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id)

    // if (!user) {
    //   return res.status(404).send()
    // }

    await req.user.remove();

    res.send(req.user);

  } catch (error) {
    res.status(500).send();
  }
})




module.exports = router;