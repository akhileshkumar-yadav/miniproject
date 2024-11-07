const {Schema,model}  = require('../connection')
const contactSchema = new Schema({
    FirstName: String,
    LastName: String,
    email: String,
    tel: Number,
    massege:String
});

module.exports = model('contact',contactSchema);