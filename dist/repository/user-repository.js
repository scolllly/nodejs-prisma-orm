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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserRepository {
    //Constructor
    constructor() { }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('repository');
            console.log(user);
            const result = yield prisma.user.create({
                data: {
                    email: user.email,
                    name: user.name
                }
            });
            return result;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findFirst({
                where: {
                    id: parseInt(id),
                }
            });
        });
    }
}
/*
main()
.catch((e) => {
  throw e
})
.finally(async () => {
  await prisma.$disconnect()
}) */
exports.default = new UserRepository();
//# sourceMappingURL=user-repository.js.map