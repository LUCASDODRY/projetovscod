// Popula o banco com baralhos e alguns cards de exemplo.
// Executado automaticamente por `npx prisma migrate dev`
// (ou manualmente com `npm run db:seed`).
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.card.deleteMany();
  await prisma.deck.deleteMany();

  await prisma.deck.create({
    data: {
      id: 1,
      name: "JavaScript",
      description: "Fundamentos da linguagem",
      cards: {
        create: [
          { question: "O que faz o operador ===?", answer: "Compara valor e tipo, sem conversão." },
          { question: "Qual a diferença entre let e const?", answer: "const não permite reatribuição." },
        ],
      },
    },
  });

  await prisma.deck.create({
    data: {
      id: 2,
      name: "Banco de Dados",
      description: "SQL e modelagem",
      cards: {
        create: [{ question: "O que é uma chave estrangeira?", answer: "Coluna que referencia a chave primária de outra tabela." }],
      },
    },
  });

  await prisma.deck.create({
    data: { id: 3, name: "Redes", description: "Conceitos de redes de computadores" },
  });

  console.log("Seed concluído: 3 baralhos e 3 cards criados.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
