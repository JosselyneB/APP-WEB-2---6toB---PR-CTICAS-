
import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/torneo", async (req, res) => {
	try {
		const torneo = await prisma.torneo.findMany({
			include: {
				category: true,
			},
		});
		res.json(torneo);
	} catch (error) {
		next(error);
	}
});

router.post("/torneo", async (req, res) => {
	try {
		const torneo = await prisma.torneo.create({
			data: req.body,
		});
		res.json(torneo);
	} catch (error) {
		next(error);
	}
});

router.get("/torneo/:id", async (req, res) => {
	const torneo = await prisma.torneo.findUnique({
		where: {
			id: Number(req.params.id),
		},
		include: {
			category: true,
		},
	});
	res.json(torneo);
});

router.delete("/torneo/:id", async (req, res) => {
	const torneo = await prisma.torneo.delete({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(torneo.quantity);
});

router.patch("/torneo/:id", async (req, res) => {
	try {
		const torneo = await prisma.torneo.update({
			where: {
				id: Number(req.params.id),
			},
			data: req.body,
			include: {
				category: true,
			},
		});
		res.json(torneo);
	} catch (error) {
		next(error);
	}
});

export default router;
