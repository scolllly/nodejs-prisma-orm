"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user-service"));
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('get');
    const users = yield user_service_1.default.getAll();
    console.log('controller: ' + users);
    res.json(users);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('post');
    const { email, name } = req.body;
    console.log(email);
    console.log(name);
    const userBd = yield user_service_1.default.create({
        email: email,
        name: name
    });
    console.log('controller: ' + userBd);
    res.json(userBd);
}));
exports.default = router;
//# sourceMappingURL=user-controller.js.map