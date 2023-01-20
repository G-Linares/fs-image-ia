import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// Setting app vars
config();
const app = express();
const PORT = process.env.SERVER_PORT || 8080;

// App config ----
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// MiddleWare ----
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

// Init server
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server started in port ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};
startServer();
