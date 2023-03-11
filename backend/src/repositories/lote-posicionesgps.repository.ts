import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {LotePosicionesgps, LotePosicionesgpsRelations} from '../models';

export class LotePosicionesgpsRepository extends DefaultCrudRepository<
  LotePosicionesgps,
  typeof LotePosicionesgps.prototype.id,
  LotePosicionesgpsRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(LotePosicionesgps, dataSource);
  }
}
