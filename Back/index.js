import express from 'express';
import cors from 'cors';

import fs from 'node:fs/promises';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/', async (req, res) => {
    const readData = await fs.readFile("./back/db.json", "utf-8")
    const data = JSON.parse(readData)
    
    res.json({status: "success", data});
});

app.get('/:id', async (req, res) => {
    const readData = await fs.readFile("./back/db.json", "utf-8")
    const dataJson = JSON.parse(readData)
    const {id} = req.params

    const data = dataJson.find(item => item.id == id)

    res.json({status: "success", data});
});

app.post('/', async (req, res) => {
    const readList = await fs.readFile("./back/db.json", "utf-8")
    const list = JSON.parse(readList)

    const data = req.body
    data.id = crypto.randomUUID()

    list.push(data)

    fs.writeFile("./back/db.json", JSON.stringify(list))

    res.json({status: "success", id: data.id});
});

app.delete('/:id', async (req, res) => {
    const readData = await fs.readFile("./back/db.json", "utf-8")
    const data = JSON.parse(readData)
    const {id} = req.params

    const newList = data.filter(item => item.id != id)

    fs.writeFile("./back/db.json", JSON.stringify(newList))

    res.json({status: "success", id});
});

app.put('/:id', async (req, res) => {
    const readData = await fs.readFile("./back/db.json", "utf-8")
    const data = JSON.parse(readData)
    const {id} = req.params
    const alterItem = req.body

    const newList = data.map(item => item.id != id ? item : Object.assign(item, alterItem))

    fs.writeFile("./back/db.json", JSON.stringify(newList))
    res.json({status: "success"});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});