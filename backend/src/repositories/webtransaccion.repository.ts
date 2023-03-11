import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Webtransaccion, WebtransaccionRelations} from '../models';

export class WebtransaccionRepository extends DefaultCrudRepository<
  Webtransaccion,
  typeof Webtransaccion.prototype.webtransaccionid,
  WebtransaccionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Webtransaccion, dataSource);
  }
}
