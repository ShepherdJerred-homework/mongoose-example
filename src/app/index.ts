import * as express from 'express';
import * as guess from './guess';
import * as morgan from 'morgan';

export const app: express.Express = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '../../../static'));

app.use('/api/jellybeans', guess.router);
