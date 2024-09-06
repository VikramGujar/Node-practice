import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h1>Hello Express<h1/>");
})

app.post("/register", (req,res) => {
    res.sendStatus(200);
})

app.put("/user/vikram", (req,res) => {
    res.sendStatus(200);
})

app.patch("/user/vikram", (req,res) => {
    res.sendStatus(200);
})

app.delete("/user/vikram", (req,res) => {
    res.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})