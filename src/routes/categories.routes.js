// importar solo el modulo router desde express
import { Router } from "express";
import { prisma } from "../db.js";

// correr el modulo router
const router = Router();

router.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories)
});

export default router;
