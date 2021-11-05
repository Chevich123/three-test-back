import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CameraModule } from './camera/camera.module';

@Module({
  imports: [
    DatabaseModule,
    CameraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
