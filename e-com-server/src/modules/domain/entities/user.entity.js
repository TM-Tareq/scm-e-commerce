export default class User {
    constructor({ id, fname, lname, email, password_hash, gender }) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password_hash = password_hash;
        this.gender = gender;
        // this.phone = phone || null;
    }

    get fullName() {
        return `${this.fname} ${this.lname} || ''`.trim();
    }

    // isValidEmail() {
    //     const re = /^[^\s@]+@[^\ss@]+\.[^\s@]+$/;
    // }
}

// User ক্লাস (domain layer-এ থাকে)

// ইউজার কীভাবে তৈরি হবে, কী পরিবর্তন করতে পারবে, কোনটা বৈধ/অবৈধ — এসব নিয়ম এখানেই থাকবে
// শুধু ডাটা ধরে রাখার বস্তু না, ইউজার নিজেই জানবে সে কী করতে পারে/পারে না
// email বদলালে isEmailVerified অটো false হবে — এটা entity নিজে করবে
// Unit test করার সময় শুধু User ক্লাস নিয়ে কাজ করলেই হয়, ডাটাবেস লাগে না
// ডাটাবেস (Prisma, TypeORM), JWT, bcrypt এসব entity-তে আসবে না — শুধু বিজনেস লজিক


// আমরা চাই ইউজারের সব ব্যবসায়িক নিয়ম এক জায়গায়, নিরাপদে, পরিষ্কারভাবে এবং সবসময় সঠিক থাকুক — যাতে বাকি সব লেয়ার (controller, service, repository) শুধু "কাজটা করিয়ে নেয়", নিয়ম নিজে না বানায়।