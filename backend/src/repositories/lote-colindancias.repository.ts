import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {LoteColindancias, LoteColindanciasRelations} from '../models';

export class LoteColindanciasRepository extends DefaultCrudRepository<
  LoteColindancias,
  typeof LoteColindancias.prototype.id,
  LoteColindanciasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(LoteColindancias, dataSource);
  }
}
