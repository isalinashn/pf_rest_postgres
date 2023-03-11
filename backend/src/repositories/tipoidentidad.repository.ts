import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tipoidentidad, TipoidentidadRelations} from '../models';

export class TipoidentidadRepository extends DefaultCrudRepository<
  Tipoidentidad,
  typeof Tipoidentidad.prototype.tipoidentidadid,
  TipoidentidadRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tipoidentidad, dataSource);
  }
}
