import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'referencia'}}
})
export class Referencia extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'referenciaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  referenciaid: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: {columnName: 'personaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  personaid?: number;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'nombre', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  nombre?: string;

  @property({
    type: 'string',
    length: 200,
    generated: false,
    postgresql: {columnName: 'observacion', dataType: 'character varying', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  observacion?: string;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    postgresql: {columnName: 'tipo', dataType: 'character', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  tipo?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    postgresql: {columnName: 'telefono', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  telefono?: string;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'direccion', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  direccion?: string;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'correo', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  correo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Referencia>) {
    super(data);
  }
}

export interface ReferenciaRelations {
  // describe navigational properties here
}

export type ReferenciaWithRelations = Referencia & ReferenciaRelations;
