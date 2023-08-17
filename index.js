const express = require("express")
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;
app.use(cors());


const myProfileData = require("./profileData.json");


app.get('/',(req,res)=>{
    res.send("Hello guys i am live gggg asdfas")
})

app.get('/my-profile',(req,res)=>{
    res.send(myProfileData);
})



app.listen(port,()=>{
    console.log("hello i am again live")
});