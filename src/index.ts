import dotenv from 'dotenv'
import 'reflect-metadata'
import express from 'express'
import routes from './app/routes'
import "./database"

dotenv.config();

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log("Ta rodando"))