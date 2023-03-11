import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'casa'}}})
export class Casa extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'casaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  casaid: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    postgresql: {columnName: 'codigo', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  codigo: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: {columnName: 'nombre', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  nombre?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tipocasaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  tipocasaid?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Casa>) {
    super(data);
  }
}

export interface CasaRelations {
  // describe navigational properties here
}

export type CasaWithRelations = Casa & CasaRelations;
