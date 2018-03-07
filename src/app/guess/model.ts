import * as mongoose from 'mongoose';
import * as config from '../../config';

export interface Guess {
  user: string;
  count: number;
}

export interface GuessDocument extends Guess, mongoose.Document {
}

mongoose.connect(config.mongoConfig.getMongoUrl());

export let GuessSchema: mongoose.Schema = new mongoose.Schema({
  user: String,
  count: Number
});

export let GuessModel: mongoose.Model<GuessDocument> = mongoose.model<GuessDocument>('Guess', GuessSchema);

export async function getGuesses (): Promise<Guess[]> {
  return GuessModel.find();
}

export async function getGuessesInRange (min: number, max: number): Promise<Guess[]> {
  return GuessModel.find();
}

export async function addGuess (guess: GuessDocument): Promise<GuessDocument> {
  return guess.save();
}
