import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
// import userRoutes from '../modules/user/api/v1/user.routes.js';


dotenv.config();
// server creation
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res)=> {
    res.json({ message: "Backend is running"})
})

// route creation
// app.use('/api/auth', userRoutes);   

// defult route


// global error handling



// app.listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
});