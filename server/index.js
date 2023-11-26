const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const messageRoute = require('./routes/messageRoute');

const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

app.get('/', (req, res) => {
  res.send('WELCOME OUR CHAT APP APIS...');
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port: ${PORT}`);
});

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.log('MongoDB connection failed: ', err.message));
