import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'cuotadet'}}
})
export class Cuotadet extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'cuotadetid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  cuotadetid: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'cuotacabid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  cuotacabid?: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'codigo', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  codigo?: string;

  @property({
    type: 'date',
    generated: false,
    postgresql: {columnName: 'fechaproceso', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  fechaproceso?: string;

  @property({
    type: 'date',
    generated: false,
    postgresql: {columnName: 'fechavence', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  fechavence?: string;

  @property({
    type: 'date',
    generated: false,
    postgresql: {columnName: 'fechapago', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  fechapago?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'capital', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  capital?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'interes', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  interes?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'extra', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  extra?: number;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'mora', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  mora?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cuotadet>) {
    super(data);
  }
}

export interface CuotadetRelations {
  // describe navigational properties here
}

export type CuotadetWithRelations = Cuotadet & CuotadetRelations;
