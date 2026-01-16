export default class UserRepository {
    async findByEmail(email) {
        throw new Error('Method not implemented');
    }

    async create(user) {
        throw new Error('Method not implemented')
    }
}

// মেথড যোগ করতে পারো (যেমন: findById, update, delete ইত্যাদি)

// এই ক্লাসটা বলছে:
// "আমাকে যদি ব্যবহার করতে চাও, তাহলে আমার থেকে extend করে নিজের ক্লাস বানাতে হবে।
// আর সেই ক্লাসে findByEmail আর create মেথড দুটোকে নিজে লিখতে হবে।
// না লিখলে আমি error ছুড়ে দেবো: 'Method not implemented'।"

// ডাটাবেস বদল করা সহজ → Mongo থেকে PostgreSQL-এ যেতে চাইলে শুধু একটা নতুন repository class বানালেই হয়, বাকি কোডে কোনো চেঞ্জ লাগে না।
// ভবিষ্যতে স্কেল করা সহজ → Cache layer, multiple DB, external service যোগ করা যায়।

// টেস্ট করা খুব সহজ
// টেস্টের সময় real MongoDB ব্যবহার করতে হয় না।
// একটা fake repository বানিয়ে টেস্ট করা যায়: