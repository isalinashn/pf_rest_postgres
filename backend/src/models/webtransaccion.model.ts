import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'webtransaccion'}}
})
export class Webtransaccion extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'webtransaccionid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  webtransaccionid: number;

  @property({
    type: 'date',
    generated: false,
    postgresql: {columnName: 'fecha', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  fecha?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'codigo', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  codigo?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: {columnName: 'sucursal', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  sucursal?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: {columnName: 'agencia', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  agencia?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'webrespuestaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  webrespuestaid?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'referenciaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  referenciaid?: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'reversion', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  reversion?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'usuario', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  usuario?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'tasa', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  tasa?: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'clave', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  clave?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'bancoid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  bancoid?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Webtransaccion>) {
    super(data);
  }
}

export interface WebtransaccionRelations {
  // describe navigational properties here
}

export type WebtransaccionWithRelations = Webtransaccion & WebtransaccionRelations;
