import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Ubicacion, UbicacionRelations} from '../models';

export class UbicacionRepository extends DefaultCrudRepository<
  Ubicacion,
  typeof Ubicacion.prototype.id,
  UbicacionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Ubicacion, dataSource);
  }
}
