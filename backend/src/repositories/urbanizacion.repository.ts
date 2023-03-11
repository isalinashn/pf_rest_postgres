import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Urbanizacion, UrbanizacionRelations} from '../models';

export class UrbanizacionRepository extends DefaultCrudRepository<
  Urbanizacion,
  typeof Urbanizacion.prototype.id,
  UrbanizacionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Urbanizacion, dataSource);
  }
}
