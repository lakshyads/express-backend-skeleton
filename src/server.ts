// Import modules
import express from 'express';
import chalk from 'chalk';

// Import routers
import HealthRouter from './routers/healthRouter';
import DefaultRouter from './routers/defaultRouter';

// Import middlewares
import httpLogger from './utils/middlewares/httpLogger';

// Initialize server
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(httpLogger);

// Initialize variables
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://localhost:';

// Use routers
server.use('/', DefaultRouter);
server.use('/server', HealthRouter);

// Start the server
server.listen(port, () => {
    console.log(`${chalk.bold.magenta('\nServer started')}`);
    console.log(`${chalk.greenBright('Server is running on')} ${chalk.underline.grey(host + port)}\n`);
})
