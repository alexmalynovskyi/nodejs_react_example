import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import fs from 'fs';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';

import ValidatorController from './controllers/ValidatorController';
const swaggerDocument = require('./swagger/swagger');

dotenv.config({ path: '.env' });

const app = express();

app.use(logger('dev'));
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'my sercret work',
  resave: false,
  cookie: { maxAge: 180 * 60 * 1000, secure: true }
}));
// app.use(cors());
app.use(ValidatorController);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

fs.readdirSync(`${__dirname}/routes`).map( (file) => {
  if(file === 'index.js') {
    return app.use('/', require(`${__dirname}/routes/${file}`).default);
  }

  if(!file.includes('.map') && !file.includes('index')) {
    return app.use(
      `/api/v1/${file.replace('.js', '')}`,
      require(`${__dirname}/routes/${file}`).default
    );
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Page not found');
});

process.on('unhandledRejection', (rej, errorMessage) => {
  // @TODO handle unhandledRejection
});

process.on('uncaughtException', (err) => {
  console.error(err.message, 'Uncaught Exception thrown');
});

export default app ;