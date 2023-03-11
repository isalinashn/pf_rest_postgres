import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Localidad, LocalidadRelations} from '../models';

export class LocalidadRepository extends DefaultCrudRepository<
  Localidad,
  typeof Localidad.prototype.localidadid,
  LocalidadRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Localidad, dataSource);
  }
}
