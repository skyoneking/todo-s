import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/ValidationPipe';
import { websocketOptions } from './websocket/websocket.gateway';

declare const module: any;

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('todo')
    .setDescription('todo and eye-health apis')
    .setVersion('1.0')
    .addBearerAuth({type: 'http', scheme: 'bearer', bearerFormat: 'JWT'})
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(9000);

  websocketOptions.start()

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
