import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from './routes/index';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', router);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
  next(createError(404));
});

// error handler
app.use(
  (err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).send(err);
  });

export default app;
