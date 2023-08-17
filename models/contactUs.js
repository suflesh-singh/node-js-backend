const mongoose = require("mongoose")

const ContactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    email: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }

)

const ContactUs = mongoose.model('ContactUs', ContactUsSchema)
module.exports = ContactUs;