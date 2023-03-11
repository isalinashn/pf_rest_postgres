import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'profesion'}}
})
export class Profesion extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'profesionid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  profesionid: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Profesion>) {
    super(data);
  }
}

export interface ProfesionRelations {
  // describe navigational properties here
}

export type ProfesionWithRelations = Profesion & ProfesionRelations;
