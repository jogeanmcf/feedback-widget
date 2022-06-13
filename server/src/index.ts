import express, {Express} from "express";
import { prisma } from "./prisma"

const app: Express = express();
app.use(express.json())

app.get('/', (req, res)=> 
    res.send("Olá mundo!")
)

app.post('/post/feedback', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    const feedback = await prisma.feedbacks.create({
        data: {
            type,
            comment,
            screenshot
        }
    });
    return res.sendStatus(201)
})

app.listen(8080,()=> {
    console.log("Server runing at port 8080");
});