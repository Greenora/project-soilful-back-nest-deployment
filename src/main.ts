import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성은 자동 제거
      forbidNonWhitelisted: true, // DTO에 없는 속성이 오면 400 에러
      transform: true, // URL의 파라미터(string)를 타입(number)에 맞게 자동 변환
    }),
  );

  await app.listen(3000);
}
bootstrap();