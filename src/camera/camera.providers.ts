import { Connection } from 'mongoose';
import { CameraSchema } from './camera.schema';

export const cameraProviders = [
  {
    provide: 'CAMERA_MODEL',
    useFactory: (connection: Connection) => connection.model('Camera', CameraSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
