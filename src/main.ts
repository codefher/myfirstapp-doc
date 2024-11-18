import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * useGlobalPipes es una función de la clase AppModule que inyecta el ValidationPipe en el módulo AppModule. Esto permite validar los datos enviados por el cliente de manera global, de modo que puede ser utilizado en cualquier módulo de la aplicación.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
