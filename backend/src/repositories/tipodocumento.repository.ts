import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tipodocumento, TipodocumentoRelations} from '../models';

export class TipodocumentoRepository extends DefaultCrudRepository<
  Tipodocumento,
  typeof Tipodocumento.prototype.id,
  TipodocumentoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tipodocumento, dataSource);
  }
}
