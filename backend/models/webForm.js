const {Schema,model}  = require('../connection')
const webFormSchema = new Schema({
    title: String,
    name:String,
    intro: String,
    introHeading:String,
    category:String,
    what: String,
    why: String,
    Description:String,
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
    step6: String,
    step7: String,
    step8: String,
    head1:String,
    head2:String,
    head3:String,
    head4:String,
    head5:String,
    heading1:String,
    heading2:String,
    heading3:String,
    heading4:String,
    heading5:String,
    heading6:String,
    heading7:String,
    heading8:String,
    whyHeading:String,
    whatHeading:String,
    heading10:String,
    heading11:String,
    heading12:String,
    heading13:String,
    heading14:String,
    heading15:String,
    heading16:String,
    heading17:String,
    heading18:String,
    heading19:String,
    heading10:String,
    heading21:String,
    heading22:String,
    
});

module.exports = model('webForm',webFormSchema);