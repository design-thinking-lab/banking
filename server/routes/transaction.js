const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming the User model is in models/User.js

// POST request to handle deposit
router.post('/deposit', async (req, res) => {
  const { userId, amount } = req.body;

  if (!userId || !amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

  try {
    // Find the user by ID and update the balance
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's balance
    user.balance += parseFloat(amount);  // Ensure amount is a float
    await user.save();

    return res.status(200).json({ msg: 'Deposit successful', balance: user.balance });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// GET request to fetch the balance of a user
router.get('/balance/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user's balance
    return res.status(200).json({ balance: user.balance });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST request to handle sending money
router.post('/send', async (req, res) => {
  const { senderId, receiverPhoneNumber, amount } = req.body;
//   console.log(req.body); 
  if (!senderId || !receiverPhoneNumber || !amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid request parameters' });
  }

  try {
    // Find the sender by ID
    const sender = await User.findById(senderId);
    if (!sender) {
      return res.status(404).json({ error: 'Sender not found' });
    }

    // Find the receiver by phone number
    const receiver = await User.findOne({ phoneNumber: receiverPhoneNumber });
    if (!receiver) {
      return res.status(404).json({ error: 'Receiver not found' });
    }

    // Check if the sender has enough balance
    if (sender.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Deduct the amount from the sender's balance and add it to the receiver's balance
    sender.balance -= parseFloat(amount);  // Ensure amount is a float
    receiver.balance += parseFloat(amount);

    // Save the updated balances
    await sender.save();
    await receiver.save();

    return res.status(200).json({ msg: 'Transaction successful', senderBalance: sender.balance, receiverBalance: receiver.balance });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});
router.post('/withdraw', async (req, res) => {
    const { userId, amount } = req.body;
  
    if (!userId || !amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid request parameters' });
    }
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the user has sufficient balance
      if (user.balance < amount) {
        return res.status(400).json({ error: 'Insufficient balance' });
      }
  
      // Deduct the amount from the user's balance
      user.balance -= parseFloat(amount); // Ensure the amount is a float
      await user.save();
  
      return res.status(200).json({ msg: 'Withdrawal successful', balance: user.balance });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  });
  

module.exports = router;
