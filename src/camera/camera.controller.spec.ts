import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { CameraController } from './camera.controller';
import { CameraService } from './camera.service';
import { cold } from 'jest-marbles';

describe('CameraController', () => {
  let controller: CameraController;
  const data = { x: 1, y: 2, z: 3 };
  const answer = { x: 1, y: 2, z: 3, _id: 'sdfsdfdsf' };

  const mockCameraService = {
    saveCamera: jest.fn().mockReturnValue(of(answer)),
    getCamera: jest.fn().mockReturnValue(of(answer)),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CameraController],
      providers: [
        { provide: CameraService, useValue: mockCameraService },
      ],
    }).compile();

    controller = app.get<CameraController>(CameraController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('`saveCamera` should call cameraService.saveCamera', () => {
    const expected$ = cold('(c|)', { c: answer });
    expect(controller.saveCamera(data)).toBeObservable(expected$);
    expect(mockCameraService.saveCamera).toHaveBeenCalledWith(data);
  });

  it('`getCamera` should call cameraService.saveCamera', () => {
    const expected$ = cold('(c|)', { c: answer });
    expect(controller.getCamera()).toBeObservable(expected$);
    expect(mockCameraService.getCamera).toHaveBeenCalled();
  });

});
