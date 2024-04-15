import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT);
  console.log(
    `🚀 app is running on port: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
