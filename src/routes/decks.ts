// =============================================================
//  Rotas de Baralhos (PRONTAS) - use como EXEMPLO de referência.
// =============================================================
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function deckRoutes(app: FastifyInstance) {
  const server = app.withTypeProvider<ZodTypeProvider>();

  // GET /decks - lista os baralhos com a quantidade de cards
  server.get("/decks", async () => {
    return prisma.deck.findMany({
      orderBy: { id: "asc" },
      include: { _count: { select: { cards: true } } },
    });
  });

  // GET /decks/:id - exemplo de validação de params + 404
  server.get(
    "/decks/:id",
    {
      schema: {
        params: z.object({
          id: z.coerce.number().int().positive(),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params;

      const deck = await prisma.deck.findUnique({ where: { id } });

      if (!deck) {
        return reply.status(404).send({ message: "Baralho não encontrado" });
      }

      return deck;
    },
  );
}
