import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * useGlobalPipes es una función de la clase AppModule que inyecta el ValidationPipe en el módulo AppModule. Esto permite validar los datos enviados por el cliente de manera global, de modo que puede ser utilizado en cualquier módulo de la aplicación.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // * SwaggerModule.createDocument crea un documento de Swagger que se puede utilizar para generar la documentación de la API.
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
