import { Request, Response, NextFunction } from 'express';
import * as model from './model';

export async function getGuesses (request: Request, response: Response, next: NextFunction) {
  console.log('Getting guesses');

  let guesses: model.Guess[] = await model.getGuesses();
  response.send(guesses);
}

export async function getGuessesInRange (request: Request, response: Response, next: NextFunction) {
  console.log('Getting guesses in range');

  let guesses: model.Guess[] = await model.getGuessesInRange(0, 0);
  response.send(guesses);
}

export async function addGuess (request: Request, response: Response, next: NextFunction) {
  console.log('Adding guess');

  let guess = new model.GuessModel({
    user: 'test',
    count: 0
  });
  let guesses: model.Guess = await model.addGuess(guess);
  response.send(guesses);
}
