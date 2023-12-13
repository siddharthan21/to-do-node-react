import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(json())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"ToDO-list"
})

app.listen(5555,()=>{
    console.log("connected")
})

app.get("/",(req,res)=>{
    const q = "select * from list"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        else return res.json(data)
    })
})
app.post("/",(req,res)=>{
    const q = "INSERT INTO list (`tittle`,`discription`) VALUES (?) "
            const VALUES = [
                req.body.tittle,
                req.body.discription
            ];
    db.query(q,[VALUES],(err,data)=>{
        if(err) return res.json(err);
        else{
            return res.json(data)
        }
    })
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    const q = "delete from list  where id = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        else return res.json(data)
    })
})