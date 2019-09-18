const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routes
const authRouter = require('../auth/auth-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use() Routes
server.use('/api/auth', authRouter)

module.exports = server