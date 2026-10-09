import { PrismaClient } from "@prisma/client";

// Instância única do Prisma Client, compartilhada por todas as rotas.
export const prisma = new PrismaClient();
