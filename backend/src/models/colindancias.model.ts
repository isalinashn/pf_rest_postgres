import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'colindancias'}}
})
export class Colindancias extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    postgresql: {columnName: 'descripcion', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Colindancias>) {
    super(data);
  }
}

export interface ColindanciasRelations {
  // describe navigational properties here
}

export type ColindanciasWithRelations = Colindancias & ColindanciasRelations;
