import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { Camera } from './camera.interface';
import { CameraService } from "./camera.service";

@Injectable()
@Controller('camera')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {
  }

  @Post()
  saveCamera(@Body('camera') camera): Observable<Camera> {
    return this.cameraService.saveCamera(camera);
  }

  @Get()
  getCamera() {
    return this.cameraService.getCamera();
  }
}
