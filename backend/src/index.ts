import { server } from "./server/Server";
import { config } from "dotenv";

config();
const port = process.env.PORT || 3333;

server.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
