// const express = require('express')
import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT ||7000

// const limiter = require("express-rate-limit")
// import rateLimit from 'express-rate-limit'

import {  publicRouter } from './src/routes/index.js'
import cors from 'cors'
const router = new express.Router();
// app.use(rateLimit({
//   windowMs: 1000,
//   max:5,
//   standardHeaders: true,
// }));
// app.use(express.json())
// ADDED------------------------
// let path = require('path');
// let mongoose = require('mongoose');
// let cors = require('cors');
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", publicRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})