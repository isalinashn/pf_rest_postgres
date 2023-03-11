import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'ubicacion'}}
})
export class Ubicacion extends Entity {
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
    type: 'string',
    required: true,
    length: 100,
    generated: false,
    postgresql: {columnName: 'ciudad', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  ciudad: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ubicacion>) {
    super(data);
  }
}

export interface UbicacionRelations {
  // describe navigational properties here
}

export type UbicacionWithRelations = Ubicacion & UbicacionRelations;
