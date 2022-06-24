require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DB_CONNECT = process.env.DB_CONNECT || "";
const PORT = process.env.API_PORT || "";
const userRouter = require('./src/user');

mongoose.connect(
  DB_CONNECT,
  () => console.log('connected to db')
  );
  
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log('Server running'));