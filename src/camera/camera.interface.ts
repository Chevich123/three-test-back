import { Document } from 'mongoose';

export interface Camera extends Document {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
