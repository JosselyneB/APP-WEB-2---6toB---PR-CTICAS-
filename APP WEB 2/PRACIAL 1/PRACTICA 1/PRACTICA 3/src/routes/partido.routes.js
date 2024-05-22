
import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/partido", async (req, res) => {
	try {
		const partido = await prisma.partido.findMany({
			include: {
				category: true,
			},
		});
		res.json(partido);
	} catch (error) {
		next(error);
	}
});

router.post("/partido", async (req, res) => {
	try {
		const partido = await prisma.partido.create({
			data: req.body,
		});
		res.json(partido);
	} catch (error) {
		next(error);
	}
});

router.get("/partido/:id", async (req, res) => {
	const partido = await prisma.partido.findUnique({
		where: {
			id: Number(req.params.id),
		},
		include: {
			category: true,
		},
	});
	res.json(partido);
});

router.delete("/partido/:id", async (req, res) => {
	const partido = await prisma.partido.delete({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(partido.quantity);
});

router.patch("/partido/:id", async (req, res) => {
	try {
		const partido = await prisma.partido.update({
			where: {
				id: Number(req.params.id),
			},
			data: req.body,
			include: {
				category: true,
			},
		});
		res.json(partido);
	} catch (error) {
		next(error);
	}
});

export default router;
