import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule);
  const port = 8080;
  await app.listen(8080);
  logger.log(`Application listening on port ${port}`);
}

bootstrap();
