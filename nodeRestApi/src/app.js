const express = require("express");
require("./db/conn")
const app = express();

const Student = require("./models/students");

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("home");
});

// app.post("/studentsPromise",(req, res)=>{
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     });
//     res.send('Hello student');
// });

app.post("/students",async(req, res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);        
    }
    
});

app.get("/students",async(req, res)=>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);        
    }
});

app.get("/students/:id",async(req, res)=>{
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);        
    }
});

app.patch("/students/:id",async(req, res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateStudent);
    } catch (e) {
        res.status(404).send(e);        
    }
});

app.delete("/students/:id",async(req, res)=>{
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!deleteStudent){
            return res.status(404).send();
        }else{
            res.send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e);        
    }
});

app.listen(3000,()=>{
    console.log('3000');
});