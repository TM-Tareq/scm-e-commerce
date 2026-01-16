import pool from "../../../infrastructure/database/mysql/mysql.pool";
import User from "../../domain/entities/user.entity";
import UserRepository from "../../domain/repositories/user.repository";

export default class MySQLUserRepository extends UserRepository {
    async findByEmail(email) {
        const [rows] = await pool.query('SELECT id, fname, lname, email, password_hash, gender FROM users WHERE email = ?', [email]);
        if(rows.length === 0) return null;
        return new User(rows[0]);
    }

    async create(user) {
        const [result] = await pool.query('INSERT INTO users (fname, lname, email, password_hash, gender) VALUES (?, ?, ?, ?, ?)', [user.fname, user.lname, user.email, user.password_hash, user.gender]);

        // Return new users array 
        return {
            id: result.insertId,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            password_hash: user.password_hash
        }
    }
}

// Ekhane mySQL sob query chalabo