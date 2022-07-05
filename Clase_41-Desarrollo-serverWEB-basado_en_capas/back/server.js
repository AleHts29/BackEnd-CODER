import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();
import postsRoutes from './routes/posts.routes.js';

const PORT = process.env.PORT;

const app = express();

db.sync({ force:false })
.then(()=>{
    console.log('Conexión a la base de datos exitosa!')
})
.catch((err)=>{
    console.log(`Error al conectar: ${err}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));
app.use('/posts', postsRoutes);


app.listen(PORT, ()=>{
    console.log(`Server OK on port: ${PORT}`)
});