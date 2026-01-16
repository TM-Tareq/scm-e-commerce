import CreateUserUseCase from "../../../application/use-cases/create-user.usecase";
import MySQLUserRepository from "../../../infrastructure/repositories/user.repository.mysql";

const userRepository = new MySQLUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

export const register = async(req, res)=> {
    try {
        const dto = req.body;
        const result = await createUserUseCase.execute(dto);
        res.status(201).json(result);
    } catch(error) {
        res.status(400).json({ message: error.message});
    }
}