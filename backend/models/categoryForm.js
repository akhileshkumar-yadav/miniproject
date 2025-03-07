const {Schema,model}  = require('../connection')
const addformSchema = new Schema({
    title: String,
    route:String,
    image:String,
    Description:String,
   
    
    
});

module.exports = model('categoryForm',addformSchema);