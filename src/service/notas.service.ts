import { NotaModel } from '../model/notas.model';

export async function criar(titulo: string, conteudo: string) {
    return NotaModel.create({
        titulo,
        conteudo
    });
}

function escaparRegex(texto: string): string {
    return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export async function listar(busca?: string) {
    const filtro = busca?.trim()
        ? {
            titulo: {
                $regex: escaparRegex(busca.trim()),
                $options: 'i'
            }
        }
        : {};

    return NotaModel.find(filtro).sort({ criadoEm: -1 });
}