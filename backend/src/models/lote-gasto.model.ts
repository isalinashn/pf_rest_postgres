import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'lote_gasto'}}
})
export class LoteGasto extends Entity {
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
    type: 'date',
    required: true,
    generated: false,
    postgresql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tipo_documento_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  tipoDocumentoId: number;

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
    scale: 2,
    generated: false,
    postgresql: {columnName: 'valor', dataType: 'numeric', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'NO', generated: undefined},
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    postgresql: {columnName: 'archivo', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  archivo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LoteGasto>) {
    super(data);
  }
}

export interface LoteGastoRelations {
  // describe navigational properties here
}

export type LoteGastoWithRelations = LoteGasto & LoteGastoRelations;
