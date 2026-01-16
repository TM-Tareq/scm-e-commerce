import User from "../../domain/entities/user.entity";
import bcrypt from 'bcryptjs';

export default class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(dto) {
        dto.validate();

        const existingUser = await this.userRepository.findByEmail(dto.email);
        if(existingUser) {
            throw new Error('Email already exists');
        }
        const passowrd_hash = await bcrypt.hash(dto.password, 12);

        const user = new User({
            firstname: dto.firstname,
            lastname: dto.lastname,
            email: dto.email,password_hash,
            gender: dto.gender || 'prefer_not'
        });

        // saving into db
        const createUser = await this.userRepository.create(user);

        return {
            id: createUser.id,
            fullName: createUser.fullName,
            email: createUser.email,
            gender: createUser.gender
        };

    }
}



// নতুন ইউজার তৈরি করার সম্পূর্ণ ব্যবসায়িক লজিক (business logic) এক জায়গায় সুন্দরভাবে রাখা.
// সব নিয়ম (validation, password hashing, email unique check, welcome email পাঠানো ইত্যাদি) এখানে থাকে.
// Controller শুধু HTTP রিকোয়েস্ট/রেসপন্স হ্যান্ডেল করে, বাকি সব Use Case-এ পাঠায়