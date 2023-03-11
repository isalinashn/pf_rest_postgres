import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Venta, VentaRelations} from '../models';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.ventaid,
  VentaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Venta, dataSource);
  }
}
