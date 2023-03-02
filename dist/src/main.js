"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("../config");
const app_module_1 = require("./app.module");
const globalPrefix = '/api';
const configureSwagger = (app) => {
    const appConfig = app.get(config_1.appConfiguration.KEY);
    const baseApis = '/' + appConfig.baseUrl + globalPrefix;
    const baseUrl = baseApis.replace('//', '/');
    const swaggerDocOptions = new swagger_1.DocumentBuilder()
        .setTitle('Joke Service')
        .setDescription('Joke service APIs description')
        .setVersion('1.0.0')
        .addServer(baseUrl)
        .setBasePath(baseUrl)
        .build();
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerDocOptions, {
        ignoreGlobalPrefix: true,
    });
    swagger_1.SwaggerModule.setup('docs', app, swaggerDoc);
};
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appConfig = app.get(config_1.appConfiguration.KEY);
    app.setGlobalPrefix(globalPrefix);
    configureSwagger(app);
    app.enableCors();
    const server = await app.listen(appConfig.port);
    console.log(`Application is running on: ${await app.getUrl()}`);
    server.setTimeout(1800000);
};
bootstrap();
//# sourceMappingURL=main.js.map