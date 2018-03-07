import * as express from 'express';
import * as guess from './guess/router';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

export const app: express.Express = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '../../../static'));
app.use(bodyParser.json());

app.use('/api/jellybeans', guess.router);
