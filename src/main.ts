import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  const configService: ConfigService = app.get(ConfigService);

  //Global prefix
  app.setGlobalPrefix('api');

  app.enableCors();

  //Swagger and OpenAPI config
  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('This is a example of API')
    .setVersion(require('../package.json').version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //Validations
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const refl = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(refl));

  await app.listen(configService.get('PORT'));
  console.log(`Application server running on: ${await app.getUrl()}`);
}

bootstrap();
