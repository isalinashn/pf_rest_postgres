import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Pagodet, PagodetRelations} from '../models';

export class PagodetRepository extends DefaultCrudRepository<
  Pagodet,
  typeof Pagodet.prototype.pagodetid,
  PagodetRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Pagodet, dataSource);
  }
}
