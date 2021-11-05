import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CameraService } from './camera.service';
import { cameraProviders } from './camera.providers';
import { CameraController } from './camera.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CameraController],
  providers: [
    CameraService,
    ...cameraProviders,
  ],
})
export class CameraModule {}
