// Importação dos itens usados nesse arquivo
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

// Configuração do dotenv
dotenv.config();

// Ligando o servidor
const server = express();

// Configurações do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Configurações da pasta public (como item static)
server.use(express.static(path.join(__dirname, '../public')));

// Rotas

// Setando porta onde o servidor irá rodar
server.listen(process.env.PORT || 8000);