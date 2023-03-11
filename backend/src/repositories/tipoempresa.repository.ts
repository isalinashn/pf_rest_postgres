import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tipoempresa, TipoempresaRelations} from '../models';

export class TipoempresaRepository extends DefaultCrudRepository<
  Tipoempresa,
  typeof Tipoempresa.prototype.tipoempresaid,
  TipoempresaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tipoempresa, dataSource);
  }
}
