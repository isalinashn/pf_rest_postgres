import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'lote'}}})
export class Lote extends Entity {
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
    type: 'number',
    required: true,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'numero_lote', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  numeroLote: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 2,
    generated: false,
    postgresql: {columnName: 'area', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO', generated: undefined},
  })
  area: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'bloque_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  bloqueId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Lote>) {
    super(data);
  }
}

export interface LoteRelations {
  // describe navigational properties here
}

export type LoteWithRelations = Lote & LoteRelations;
