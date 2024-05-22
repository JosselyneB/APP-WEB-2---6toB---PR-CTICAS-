import { Router, Router } from "express";
import {prisma} from'../dbs.js';

const Router = Router();

router.get('/equipo', async (req, res)=>{
    const equipo = await prisma.equipo.findMany()
    res.json('equipo')
})

router.post('/equipo', async (req, res) => {
    await prisma.equipo.create({
        data: req.body,
    });
    res.json(newEquipo);
});

export default Router;
