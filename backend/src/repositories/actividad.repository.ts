import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Actividad, ActividadRelations} from '../models';

export class ActividadRepository extends DefaultCrudRepository<
  Actividad,
  typeof Actividad.prototype.actividadid,
  ActividadRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Actividad, dataSource);
  }
}
