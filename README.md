# Avaliação Prática: API de Flashcards

## Primeiros passos (cerca de 5 min)

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

O servidor sobe em **http://localhost:3333**. Os baralhos 1, 2 e 3 já são criados pelo seed.

## O que fazer

Implemente as rotas em **`src/routes/cards.ts`**, completando os blocos `// TODO:`.
Use `src/routes/decks.ts` como exemplo. A especificação completa está no **ROTEIRO_AVALIACAO**.

| Rota | Pontos |
|---|---|
| `POST /cards` | 3,0 |
| `GET /cards` | 2,0 |
| `GET /cards/:id` | 2,0 |
| `DELETE /cards/:id` | 2,0 |
| Qualidade do código | 1,0 |
| Bônus `POST /cards/:id/review` | +1,0 |

Para testar, use `requests.http` (extensão REST Client), Insomnia, Postman ou Thunder Client.

Banco bagunçado? Rode `npm run db:reset`.
Você precisa completar o código do arquivo server.ts
A prova deve ser entregue as 21:45
