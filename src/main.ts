import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from 'interceptor/transform.interceptor';
import { AllExceptionsFilter } from 'exception/all-exceptions.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      bufferLogs: true,
    });
    const configService: ConfigService = app.get(ConfigService);

    // API prefix version
    app.setGlobalPrefix('api/v1');

    // Transform response
    app.useGlobalInterceptors(new TransformInterceptor());

    // Handle exceptions (Catch all exceptions)
    app.useGlobalFilters(new AllExceptionsFilter());

    // Cors
    const options = {
      origin: '*',
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    };
    app.enableCors(options);

    // Static folder
    app.useStaticAssets(`${__dirname}/public`);

    // Body Parser
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    // Swagger document
    const config = new DocumentBuilder()
      .setTitle('Lotions Swagger')
      .setDescription('Lotions API description')
      .addBearerAuth()
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
    });

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.listen(configService.get('APP_PORT') || 3333);

    console.table([
      {
        title: 'App Start'.toUpperCase(),
        body: `${`http://localhost:${configService.get('APP_PORT')}/`}`,
      },
      {
        title: 'Swagger Documentation'.toUpperCase(),
        body: `${`http://localhost:${configService.get('APP_PORT')}/docs`}`,
      },
    ]);
  } catch (error) {
    console.log('error:', error);
  }
}
bootstrap();
