import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Cuotacab, CuotacabRelations} from '../models';

export class CuotacabRepository extends DefaultCrudRepository<
  Cuotacab,
  typeof Cuotacab.prototype.cuotacabid,
  CuotacabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Cuotacab, dataSource);
  }
}
