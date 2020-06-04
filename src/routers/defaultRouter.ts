// Initialize router
import express from 'express';
const DefaultRouter = express.Router();

// Imports
import { log, logInfo, logError, newLine } from '../utils/loggerUtil';
import dateTimeStamp from '../utils/dateTimeUtil';
import { ok } from 'assert';

// Routes -----------------------------

// Home route
DefaultRouter.route('/')
    .get(async (req: express.Request, res: express.Response) => {
        newLine();
        log('Home route log!');
        logInfo('Home route log info!', 'Test log info message', { message: "Hello World", timeStamp: dateTimeStamp() });
        // logError('Home route log error request!','Test log error message with request data',req);
        logError('Home route log error no request!', 'Test log error message without request data');
        res.status(200).send("Hello World")
    })

// ------------------------------------
export default DefaultRouter;
