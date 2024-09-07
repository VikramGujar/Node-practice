import express from 'express';

const app = express();
const port = 3000;

app.get("/",(req,res) => {

    const toDay = new Date();
    const dayNow = toDay.getDay();

    console.log(dayNow);

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(dayNow === 0 || dayNow === 6)
    {
         type = "the weekend";
         adv = "time to have FUN";
    }else{
        
    }

    res.render("index.ejs",{
        dayType : type,
        advice : adv,
    })
})

app.listen(port, () => {
    console.log(`Server rinning on port ${port}`);
})