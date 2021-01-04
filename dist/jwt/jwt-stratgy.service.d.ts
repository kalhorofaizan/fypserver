import { Strategy } from "passport-jwt";
declare const JwtStratgy_base: new (...args: any[]) => Strategy;
export declare class JwtStratgy extends JwtStratgy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
