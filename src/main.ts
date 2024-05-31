import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import { userRoutes } from './routes/user';
import { taskRoutes } from './routes/task';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/user', userRoutes());
app.use('/tasks', taskRoutes());

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
