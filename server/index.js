import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E" });
});

const localhostPort = 8080;
const localIpAddress = 'localhost';
const networkIpAddress = '192.168.0.100';
app.listen(localhostPort, localIpAddress, () => console.log(`Server has started at ${localIpAddress}:${localhostPort}`));
app.listen(localhostPort, networkIpAddress, () => console.log(`Server has started at ${networkIpAddress}:${localhostPort}`));
