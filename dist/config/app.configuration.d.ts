import { ConfigType } from '@nestjs/config';
export declare const appConfiguration: (() => {
    port: string | number;
    baseUrl: string;
    mongoDB: {
        connection: string;
        dbname: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: string | number;
    baseUrl: string;
    mongoDB: {
        connection: string;
        dbname: string;
    };
}>;
export type AppConfiguration = ConfigType<typeof appConfiguration>;
export declare const InjectAppConfig: () => (target: object, key: string | symbol, index?: number) => void;
