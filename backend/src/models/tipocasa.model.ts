import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tipocasa'}}
})
export class Tipocasa extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    generated: true,
    id: 1,
    postgresql: {columnName: 'tipocasaid', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  tipocasaid: number;

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

  constructor(data?: Partial<Tipocasa>) {
    super(data);
  }
}

export interface TipocasaRelations {
  // describe navigational properties here
}

export type TipocasaWithRelations = Tipocasa & TipocasaRelations;
