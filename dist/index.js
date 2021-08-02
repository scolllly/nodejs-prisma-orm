"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./controller/user-controller"));
const server = express_1.default();
const port = process.env.PORT || 3000;
//midleware
server.use(express_1.default.json());
server.use('/users', user_controller_1.default);
server.listen(port, () => {
    console.log(`Server running at port: ` + port);
});
//# sourceMappingURL=index.js.map