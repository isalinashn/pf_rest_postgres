import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Webrespuesta, WebrespuestaRelations} from '../models';

export class WebrespuestaRepository extends DefaultCrudRepository<
  Webrespuesta,
  typeof Webrespuesta.prototype.webrespuestaid,
  WebrespuestaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Webrespuesta, dataSource);
  }
}
