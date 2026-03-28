// importar solo el modulo router desde express
import { Router } from "express";
import { prisma } from "../db.js";
const router = Router();

router.get("/products", async (req, res) => {
  //la operacion de base de datos es asincrona
  const products = await prisma.product.findMany();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const productFound = await prisma.product.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      category:true
    }
  });

  if (!productFound) {
    return res.status(400).json({ error: "Product not found" });
  }

  return res.json(productFound);
});

router.post("/products", async (req, res) => {
  //la operacion de base de datos es asincrona
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

router.delete("/products/:id", async (req, res) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });

  if (!deletedProduct) {
    return res.status(400).json({ error: "Product not found" });
  }

  return res.json(deletedProduct);
});

router.put('/products/:id', async (req, res) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: req.body
  })

  return res.json(updatedProduct)
})

export default router;
