export default class CreateUserDto {
    constructor ({ firstname, lastname, email, password, confirmPasswordebar }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.gender = gender;
    }

    // DOES ANY NEED TO INCREASE INFORMATION INTO THE USER

    validate() {
        if(!this.firstname || !this.lastname) {
            throw new Error('First and Last name required');
        }
        if(!this.email) {
            throw new Error('Email is required');
        }
        if(!this.password || this.confirmPassword) {
            throw new Error('Password do not match');
        }
        if (this.password !== this.confirmPassword) throw new Error('Passwords do not match');
    }
}


// যখন ক্লায়েন্ট (frontend/app) থেকে নতুন ইউজার তৈরি করার জন্য ডাটা পাঠায় (POST /users/register), তখন সেই ডাটা সরাসরি তোমার User মডেল/এন্টিটিতে ঢোকানো ঠিক না।
// তাই আমরা একটা মধ্যবর্তী অবজেক্ট বানাই → যাকে বলে CreateUserDto।