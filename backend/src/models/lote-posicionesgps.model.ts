import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'lote_posicionesgps'}
  }
})
export class LotePosicionesgps extends Entity {
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
    postgresql: {columnName: 'lote_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  loteId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 8,
    generated: false,
    postgresql: {columnName: 'latitud', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 8, nullable: 'NO', generated: undefined},
  })
  latitud: number;

  @property({
    type: 'number',
    required: true,
    precision: 11,
    scale: 8,
    generated: false,
    postgresql: {columnName: 'longitud', dataType: 'numeric', dataLength: null, dataPrecision: 11, dataScale: 8, nullable: 'NO', generated: undefined},
  })
  longitud: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LotePosicionesgps>) {
    super(data);
  }
}

export interface LotePosicionesgpsRelations {
  // describe navigational properties here
}

export type LotePosicionesgpsWithRelations = LotePosicionesgps & LotePosicionesgpsRelations;
