"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user-service"));
const router = express_1.Router();
router.get('/', (req, res) => {
    const users = user_service_1.default.getAll();
    res.json(users);
});
exports.default = router;
//# sourceMappingURL=cliente-controller.js.map