import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Nacionalidad, NacionalidadRelations} from '../models';

export class NacionalidadRepository extends DefaultCrudRepository<
  Nacionalidad,
  typeof Nacionalidad.prototype.nacionalidadid,
  NacionalidadRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Nacionalidad, dataSource);
  }
}
