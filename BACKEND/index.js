import express from "express";
const app=express();

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'a joke',
            content:"this is a joke"
        },
        {
            id:2,
            title:'a another joke',
            content:"this is 2 joke"
        },
        {
            id:3,
            title:'a  third joke',
            content:"this is a joke"
        },
        {
            id:4,
            title:'a  four joke',
            content:"this is a joke"
        },
        {
            id:5,
            title:'a  five joke',
            content:"this is a joke"
        },

    ];
    res.send(jokes);
});

const port=process.env.port||5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});