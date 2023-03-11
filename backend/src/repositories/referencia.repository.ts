import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Referencia, ReferenciaRelations} from '../models';

export class ReferenciaRepository extends DefaultCrudRepository<
  Referencia,
  typeof Referencia.prototype.referenciaid,
  ReferenciaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Referencia, dataSource);
  }
}
