import { Test } from '@nestjs/testing';
import { cold } from 'jest-marbles';
import { createDefaultModelMock } from '../tests/test-helper';
import { CameraService } from './camera.service';

describe('CameraService', () => {
  let service;
  let cameraModel;
  const data = { x: 1, y: 2, z: 3 };
  const answer = { x: 1, y: 2, z: 3, _id: 'sdfsdfdsf' };

  beforeEach(async () => {
    const module = await Test.createTestingModule(
      {
        imports: [],
        providers: [
          CameraService,
          { provide: 'CAMERA_MODEL', useValue: createDefaultModelMock() },
        ],
      }).compile();

    service = module.get<CameraService>(CameraService);
    cameraModel = module.get('CAMERA_MODEL');
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('`saveCamera` should call model.updateOne', () => {
    const spy = jest.spyOn(cameraModel, 'updateOne').mockReturnValue(cold('(c|)', { c: data }));
    const expected$ = cold('(c|)', { c: data });
    expect(service.saveCamera(data)).toBeObservable(expected$);
    expect(spy).toHaveBeenCalledWith({}, data, { upsert: true });
  });

  it('`getCamera` should call model.findOne', () => {
    const spy = jest.spyOn(cameraModel, 'findOne').mockReturnValue(cold('(c|)', { c: answer }));
    const expected$ = cold('(c|)', { c: data });
    expect(service.getCamera(data)).toBeObservable(expected$);
    expect(spy).toHaveBeenCalledWith();
  });
});
