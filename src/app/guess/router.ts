import * as express from 'express';
import * as controller from './controller';

export const router: express.Router = express.Router();

router.get('/', controller.getGuesses);

router.get('/:range', controller.getGuessesInRange);

router.post('/', controller.addGuess);
