import cors from 'cors';
import express from 'express';
import { criar, listar } from './service/notas.service';

export const app = express();

app.use(cors());
app.use(express.json());

// Listar notas
app.get('/notas', async (req, res) => {
    try {
        const busca = typeof req.query.busca === 'string'
            ? req.query.busca
            : undefined;

        const notas = await listar(busca);
        res.json(notas);
    } catch (error) {
        console.error('Erro ao listar notas:', error);
        res.status(500).json({ erro: 'Erro ao listar notas' });
    }
});

// Criar nota
app.post('/notas', async (req, res) => {
    try {
        const { titulo, conteudo = '' } = req.body;

        if (typeof titulo !== 'string' || !titulo.trim()) {
            res.status(400).json({ erro: 'Título é obrigatório' });
            return;
        }

        const nota = await criar(titulo, conteudo);
        res.status(201).json(nota);
    } catch (error) {
        console.error('Erro ao criar nota:', error);
        res.status(500).json({ erro: 'Erro ao criar nota' });
    }
});