import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db/db";
 
export const register = async (req,res) => {
    const { username, email, password } = req.body;
    
    try{
        const hashed = await bcrypt.hash(password, 10);

        const result = pool.query(
            `INSERT INTO users (username, email, password_hash)
            VALUES ($1, $2, $3)
            RETURNING user_id, username, email`,
            [username, email, password]
        );
        res.status(201).json(result.rows[0]);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

export const login = async (req,res) => {
    const { username, email, password } = req.body;

    try{
        const result = await pool.query (
            'SELECT * FROM users WHERE email = $1',
        [email]
        );

        if (result.rows.length === 0){
            return res.status(401).json({message : "invalid credentials"});
        }

        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        const token = jwt.sign(
            {user_id : user.user_id},
            process.env.JWWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({token});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};