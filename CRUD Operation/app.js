const express = require("express");
const path = require('path');
const app = express();
const userModel = require('./models/user');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{ 
    res.render('index');
});

app.get('/read', async(req,res)=>{
    let allUsers = await userModel.find();
  res.render('read',{user:allUsers});
});

app.get('/delete/:id',async(req,res)=>{
     await userModel.findOneAndDelete({_id:req.params.id});
     res.redirect('/read');
    // res.send(req.params.id);
});

app.post('/create',async(req,res)=>{
    let {name,email,image}=req.body;
    const a = await userModel.create({
        name:name,
        email:email,
        image:image
    })
    res.redirect('/read');
})

app.get('/update/:id',async(req,res)=>{
    let user = await userModel.findOne({_id:req.params.id});
    res.render('update',{user:user});
});

app.post('/update',async(req,res)=>{
    let {name,email,image,id} = req.body;
    await userModel.findOneAndUpdate({_id:id},{
        name:name,
        email:email,
        image:image
    })
    res.redirect('/read');
})


app.listen(3000);