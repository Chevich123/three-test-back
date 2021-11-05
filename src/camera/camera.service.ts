import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Camera } from './camera.interface';
import { from, map, Observable } from 'rxjs';

@Injectable()
export class CameraService {
  constructor(
    @Inject('CAMERA_MODEL') private cameraModel: Model<Camera>,
  ) {
  }

  saveCamera(createCameraDto: Camera): Observable<any> {
    return from(this.cameraModel.updateOne({}, createCameraDto, { upsert: true }));
  }

  getCamera(): Observable<Partial<Camera> | null> {
    return from(this.cameraModel.findOne()).pipe(
      map(item => item ? {x: item.x, y: item.y, z: item.z} : null),
    );
  }
}
