import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepository {

    //Constructor
    constructor(){}

    async create(user: any){
        const result = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name
            }
        })
        return result
    }

    async getAll(){
        return await prisma.user.findMany()
    }


    async getById(id: string){
        return await prisma.user.findFirst({
            where: {
                id: parseInt(id),
            }
        })
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

export default new UserRepository();
