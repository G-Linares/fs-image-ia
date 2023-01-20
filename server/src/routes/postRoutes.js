import express from 'express';
import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

config();
const router = express.Router();

export default router;
