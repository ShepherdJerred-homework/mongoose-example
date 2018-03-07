import * as mongoose from "mongoose";

export interface Guess {
  user: string;
  count: number;
}

export interface GuessDocument extends Guess, mongoose.Document {

}

const GuessSchema = new mongoose.Schema({
  user: String,
  count: Number
});

export const GuessModel = mongoose.model<GuessDocument>("Student", GuessSchema);
