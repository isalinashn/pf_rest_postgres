import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Urbanizacionacceso, UrbanizacionaccesoRelations} from '../models';

export class UrbanizacionaccesoRepository extends DefaultCrudRepository<
  Urbanizacionacceso,
  typeof Urbanizacionacceso.prototype.id,
  UrbanizacionaccesoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Urbanizacionacceso, dataSource);
  }
}
