/** ---------------------------------
 *        Logger Util
 * ---------------------------------- */

import chalk from 'chalk';
import { Request, Response, } from 'express';
import { logRequest, logResponse } from './middlewares/httpLogger';
import dateTimeStamp from './dateTimeUtil';


/** Standard console log
* @param message Message to log
* @param data Optional data to log
*/
const log = (message: string, ...data: any) => {
    if (data)
        console.log(message, ...data);
    else
        console.log(message);
};

/** Logs info
 * @param message Message to log 
 * @param title Optional title for message
 * @param data Optional data to log
 */
const logInfo = (title: string, message: string, ...data: any) => {
    newLine();
    console.info(`${chalk.blue(`[i] Info = `)}`, { title: title, message: message, data: data ?? '', timeStamp: dateTimeStamp() });
};

/** Logs Error
 * @param message Message to log
 * @param data Optional data to log
 * @param req Express request
 */
const logError = (title: string, message: string, data?: any,) => {
    newLine();
    console.error(`${chalk.red.bold(`<!> Error = `)}`, {
        title: title,
        message: message,
        data: data ?? 'null',
        timeStamp: dateTimeStamp(),
    });
};

/** Logs a new empty line */
const newLine = () => {
    console.log('\n');
}

const horizontalRule = () => {
    log(chalk.bold('---------------------------------------------------------------------------------------------------------------------------------------------------'));
}

// Exports ------------------------------------------------------------------------------------
export { log, logInfo, logError, logRequest, logResponse, newLine , horizontalRule};