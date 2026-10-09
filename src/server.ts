/* 
Vocês devem implementar o arquivo server  tambem
*/

import Fastify from "fastify";
import { hasZodFastifySchemaValidationErrors, serializerCompiler, validatorCompiler, } from "fastify-type-provider-zod";
import { cardRoutes } from "./routes/cards";
import { deckRoutes } from "./routes/decks";

export const app = Fastify({ logger: true });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(deckRoutes);
app.register(cardRoutes);

app.listen({ port: 3333}).then(() => {
  console.log('Server online!')
}
)
