import * as mongoose from 'mongoose';

export const CameraSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  z: Number,
});
