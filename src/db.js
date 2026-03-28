//importar la clase prisma client para crear conexion hacia prisma
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// correr el modulo router
const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter }); 

export  {
    adapter,
    prisma
}