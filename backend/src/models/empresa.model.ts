import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'empresa'}}
})
export class Empresa extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'empresaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  empresaid: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'codigo', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  codigo?: string;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'nombre', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  nombre?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'actividadid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  actividadid?: number;

  @property({
    type: 'date',
    generated: false,
    postgresql: {columnName: 'ingreso', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  ingreso?: string;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'puesto', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  puesto?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    postgresql: {columnName: 'sueldo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: undefined},
  })
  sueldo?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tipoempresaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  tipoempresaid?: number;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'web', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  web?: string;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'direccion', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  direccion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
