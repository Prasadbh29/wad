import express from 'express'
const app=express()

import path from 'path'
import { fileURLToPath } from 'url'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.post('/users',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'));
})

app.listen(5000,()=>{
    console.log('server running on port 5000')
})