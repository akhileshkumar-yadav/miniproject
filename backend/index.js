// express init
const express = require('express');
const app = express();
//backend run port num
const port = 5000;
const cors = require('cors')
// routing 
// app.get("/",(req,res) =>{
//     res.send("Hello World");
// })
// app.get("/product",(req,res) =>{
//     res.send("product page");
// })


const UserRouter = require('./routers/user')
const ContactRouter = require('./routers/contact')
const AddRouter = require('./routers/addform')
const WebRouter = require('./routers/webForm')
const CateRouter = require('./routers/categoryForm')


// middleman
// middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use('/user', UserRouter)
app.use('/contact', ContactRouter)
app.use('/addform',AddRouter)
app.use('/webForm',WebRouter)
app.use('/categoryForm',CateRouter)


app.listen(port, () => {
    console.log(`server is succsessfully run ${port}`);

}) 

