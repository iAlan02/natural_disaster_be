import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    const user = await this.usersRepository.findOne({
      where: { id: id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const user = await this.findOne(id);
    this.usersRepository.merge(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: number) {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('User not found');
    }
    return { message: 'User successfully deleted' };
  }
}
