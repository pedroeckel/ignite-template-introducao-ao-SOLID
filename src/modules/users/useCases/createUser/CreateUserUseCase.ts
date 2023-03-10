import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const result = this.usersRepository.create({ name, email });

    return result;
  }
}

export { CreateUserUseCase };
