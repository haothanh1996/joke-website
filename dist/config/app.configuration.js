"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectAppConfig = exports.appConfiguration = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
exports.appConfiguration = (0, config_1.registerAs)('app', () => {
    return {
        port: process.env.PORT || 9000,
        baseUrl: process.env.BASE_URL_APIS || '',
        mongoDB: {
            connection: process.env.MONGODB_URI,
            dbname: process.env.MONGODB_DBNAME,
        },
    };
});
const InjectAppConfig = () => (0, common_1.Inject)(exports.appConfiguration.KEY);
exports.InjectAppConfig = InjectAppConfig;
//# sourceMappingURL=app.configuration.js.map