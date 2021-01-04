"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
exports.hashPassword = async (password) => {
    const salt = await bcrypt_1.genSalt(10);
    const hashed = await bcrypt_1.hash(password, salt);
    return hashed;
};
exports.comparePassword = async (password, userPassword) => {
    const result = await bcrypt_1.compare(password, userPassword);
    return result;
};
//# sourceMappingURL=hash.js.map