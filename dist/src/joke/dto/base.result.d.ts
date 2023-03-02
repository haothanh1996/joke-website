export declare class BaseResult<T> {
    errors: Record<string, string[]>;
    data: T;
    success: boolean;
}
