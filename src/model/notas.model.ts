import { Schema, model, type InferSchemaType } from 'mongoose';

const notaSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 80
        },

        conteudo: {
            type: String,
            trim: true,
            maxlength: 2000,
            default: ''
        }
    },
    {
        timestamps: {
            createdAt: 'criadoEm',
            updatedAt: 'atualizadoEm'
        },

        versionKey: false,

        toJSON: {
            transform: (_doc, ret) => {
                const obj = ret as Record<string, unknown>;

                obj.id = String(obj._id);
                delete obj._id;

                return obj;
            }
        }
    }
);

export type Nota = InferSchemaType<typeof notaSchema>;

export const NotaModel = model('Nota', notaSchema);