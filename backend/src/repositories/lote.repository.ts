import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Lote, LoteRelations} from '../models';

export class LoteRepository extends DefaultCrudRepository<
  Lote,
  typeof Lote.prototype.id,
  LoteRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Lote, dataSource);
  }
}
