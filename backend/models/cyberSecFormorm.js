const {Schema,model}  = require('../connection')
const addformSchema = new Schema({
    title: String,
    intro: String,
    introHeading:String,
    category:String,
    what: String,
    why: String,
    head: String,
    heading: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    step1: String,
    step2: String,
    step3: String,
    step4: String,
    step5: String,
    head1:String,
    head2:String,
    head3:String,
    head4:String,
    head5:String,
    whyHeading:String,
    whatHeading:String,
    
    
});

module.exports = model('addform',addformSchema);