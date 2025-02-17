const {Schema,model}  = require('../connection')
const addformSchema = new Schema({
    title: String,
    image:String,
    Description:String,
   
    
    
});

module.exports = model('categoryForm',addformSchema);