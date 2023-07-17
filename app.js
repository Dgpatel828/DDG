const express=require("express")
const path=require("path")
const fs=require("fs");
const app=express();
const port =80;

//Express specific stuff
app.use('/static',express.static('static'));  //for serving static file
app.use(express.urlencoded({ extended: true }));


//Pug specific stuff
app.set('view engine','pug');   //see the templete engine as pug
app.set('views',path.join(__dirname,'views'));  //set the views directory


//endpoints
app.get('/',(req,res)=>{
   
    const param={ }
    res.status(200).render('index.pug',param)
    
});

app.get('/contact',(req,res)=>{
   
    const param={ }
    res.status(200).render('contact.pug',param)
    
});

app.get('/about',(req,res)=>{
   
    const param={ }
    res.status(200).render('about.pug',param)
    
});

app.get('/service',(req,res)=>{
   
    const param={ }
    res.status(200).render('service.pug',param)
    
});
app.get('/class',(req,res)=>{
   
    const param={ }
    res.status(200).render('class.pug',param)
    
});


app.post('/contact',(req,res)=>{
    const name=req.body.name 
    const phone=req.body.phone
    const email=req.body.email
    const address=req.body.address
    const desc=req.body.desc
    let OutputToWrite=`Name of the Student: ${name},\nPhone:${phone},\nEmail:${email},\nAddress:${address},\nconcern :${desc}\n`
    fs.writeFileSync('output.txt',OutputToWrite)

    const param={message:'Your form has been submitted successfully'}
    res.status(200).render('contact.pug',param)
})


//start the server
app.listen(port,()=>{
    console.log(`The app is starte successfully at port ${port}`);
})
