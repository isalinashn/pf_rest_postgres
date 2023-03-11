import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Cuotadet, CuotadetRelations} from '../models';

export class CuotadetRepository extends DefaultCrudRepository<
  Cuotadet,
  typeof Cuotadet.prototype.cuotadetid,
  CuotadetRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Cuotadet, dataSource);
  }
}
