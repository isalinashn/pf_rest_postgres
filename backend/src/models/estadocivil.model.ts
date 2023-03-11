import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'estadocivil'}}
})
export class Estadocivil extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'estadocivilid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  estadocivilid: number;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    postgresql: {columnName: 'estado', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  estado?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estadocivil>) {
    super(data);
  }
}

export interface EstadocivilRelations {
  // describe navigational properties here
}

export type EstadocivilWithRelations = Estadocivil & EstadocivilRelations;
