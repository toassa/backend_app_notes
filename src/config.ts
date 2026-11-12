import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.PORT ?? 3333);

export const MONGODB_URI = process.env.MONGODB_URI ?? '';

export const DB_NAME = process.env.DB_NAME ?? 'ProjetoNotas';

if (!MONGODB_URI) {
    throw new Error('Defina MONGODB_URI no arquivo .env');
}