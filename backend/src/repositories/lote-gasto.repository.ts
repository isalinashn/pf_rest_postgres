import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {LoteGasto, LoteGastoRelations} from '../models';

export class LoteGastoRepository extends DefaultCrudRepository<
  LoteGasto,
  typeof LoteGasto.prototype.id,
  LoteGastoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(LoteGasto, dataSource);
  }
}
