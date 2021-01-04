"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileName = exports.imageFilter = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
exports.imageFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new common_1.HttpException('Only image files are allowed!', common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.fileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = path_1.extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 10).toString(10))
        .join('');
    callback(null, `${name}${randomName}${fileExtName}`);
};
//# sourceMappingURL=image.handler.js.map