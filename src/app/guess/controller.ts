import { Request, Response, NextFunction } from 'express';
import * as model from './model';

export async function getGuesses (request: Request, response: Response, next: NextFunction) {
  let guesses: model.Guess[] = await model.getGuesses();
  response.send(guesses);
}

export async function getGuessesInRange (request: Request, response: Response, next: NextFunction) {
  let min: number = request.params.range.split('-')[0];
  let max: number = request.params.range.split('-')[1];

  let guesses: model.Guess[] = await model.getGuessesInRange(min, max);
  response.send(guesses);
}

export async function addGuess (request: Request, response: Response, next: NextFunction) {
  let guess = new model.GuessModel({
    user: request.body.user,
    count: request.body.count
  });

  let addResult: model.Guess = await model.addGuess(guess);
  response.send(addResult);
}
