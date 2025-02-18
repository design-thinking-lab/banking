require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const transactionRoutes = require('./routes/transaction'); 
// const Transaction = require('./models/Transaction');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/transaction', transactionRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Registration Endpoint
app.post('/register', async (req, res) => {
  const { phoneNumber, name, email, bankName, password } = req.body;

  if (!phoneNumber || !name || !email || !bankName || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      phoneNumber,
      name,
      email,
      bankName,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ success: 'Registration successful! You can now log in.' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Login Endpoint
app.post('/login', async (req, res) => {
  const { phoneNumber, password } = req.body;
 
  if (!phoneNumber || !password) {
    return res.status(400).json({ error: 'Phone number and password are required' });
  }

  try {
    const user = await User.findOne({ phoneNumber });
    // console.log(user)
    if (!user) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    //console.log(isMatch)
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
