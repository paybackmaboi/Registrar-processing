import { Repository } from 'typeorm';
import { AppDataSource } from '../config/database';
import { User } from '../entities/User.entity';

export class UserService {
    private userRepository: Repository<User> = AppDataSource.getRepository(User);

    async getAll() {
        return this.userRepository.find({ 
            select: ['id', 'studentID', 'firstName', 'lastName', 'middleName','age','course', 'created_at', 'updated_at'],
            withDeleted: false
        });
    }

    async getById(id: number) {
        return this.userRepository.findOne({
            where: { id },
            withDeleted: false
        });
    }

    async create(data: Partial<User>) {
        const student = this.userRepository.create(data);
        return this.userRepository.save(student);
    }

    async update(id: number, data: Partial<User>) {
        const student = await this.getById(id);
        if (!student) throw new Error('Student not found');

        Object.assign(student, data);
        return this.userRepository.save(student);
    }

    async delete(id: number) {
        const user = await this.getById(id);
        if (!user) throw new Error('User not found');

        // This will perform a soft delete (sets deleted_at)
        return this.userRepository.softRemove(user);
    }
}