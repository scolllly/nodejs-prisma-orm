import UserRepository  from '../repository/user-repository';

class UserService {

    //Constructor
    constructor(){}

    async getAll() {
        const users = await UserRepository.getAll();
        return users

    }

    async create(user: any) {
        const userBD = await UserRepository.create(user);
        return userBD

    }
}

export default new UserService();