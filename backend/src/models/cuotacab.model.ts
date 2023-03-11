import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'cuotacab'}}
})
export class Cuotacab extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'cuotacabid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  cuotacabid: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'codigo', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  codigo?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'ventaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  ventaid?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'valor', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  valor?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'interes', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  interes?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tiempo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  tiempo?: number;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    postgresql: {columnName: 'tipo', dataType: 'character varying', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  tipo?: string;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    postgresql: {columnName: 'estado', dataType: 'character varying', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  estado?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cuotacab>) {
    super(data);
  }
}

export interface CuotacabRelations {
  // describe navigational properties here
}

export type CuotacabWithRelations = Cuotacab & CuotacabRelations;
