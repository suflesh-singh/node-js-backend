const express = require("express")
const app = express();
const mongoose = require("mongoose")
const ContactUs = require("./models/contactUs")

app.use(express.json());
const cors = require("cors");

const port = process.env.PORT || 3000;
app.use(cors());


const myProfileData = require("./profileData.json");


app.get('/', (req, res) => {
    res.send("Hello guys i am live gggg asdfas")
})

app.get('/my-profile', (req, res) => {
    res.send(myProfileData);
})

// contact us post Api htart here
app.post('/ContactUs', async (req, res) => {
    try {
        const Contact = await ContactUs.create(req.body)
        res.status(200).json(Contact)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


app.listen(port, () => {
    console.log("hello i am again live")
});

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://sufleshs:sufi@1212@cluster0.em25nzh.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(port, () => {
        console.log('Node Api is running on post 3000')
    })

}).catch()
{

}