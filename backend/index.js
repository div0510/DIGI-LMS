const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const userRouter = require('./Routers/userRouter');
const trainerRouter = require('./Routers/trainerRouter');



//Middle Ware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/user',userRouter);
app.use('/trainer',trainerRouter);

app.get('/',(req,res)=>{
    res.send('Request at blank');
})




app.listen(port,()=>{
    console.log('Server Listening at 5000');
})