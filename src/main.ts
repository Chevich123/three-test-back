import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const originList = typeof appConfig.cors === 'string' ? appConfig.cors.split(',') : appConfig.cors;
  app.enableCors({
    origin: originList,
    credentials: true,
    exposedHeaders: [
      'Accept',
      'authorization',
      'Authentication',
      'Content-Type',
      'If-None-Match',
      'SourceType',
    ],
  });

  await app.listen(3000);
}
bootstrap();
