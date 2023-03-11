import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tipocasa, TipocasaRelations} from '../models';

export class TipocasaRepository extends DefaultCrudRepository<
  Tipocasa,
  typeof Tipocasa.prototype.tipocasaid,
  TipocasaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tipocasa, dataSource);
  }
}
