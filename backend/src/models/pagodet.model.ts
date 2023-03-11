import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'pagodet'}}
})
export class Pagodet extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'pagodetid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  pagodetid: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'pagocabid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  pagocabid?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'cuotadetid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  cuotadetid?: number;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    postgresql: {columnName: 'tipo', dataType: 'character varying', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  tipo?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'valor', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  valor?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pagodet>) {
    super(data);
  }
}

export interface PagodetRelations {
  // describe navigational properties here
}

export type PagodetWithRelations = Pagodet & PagodetRelations;
