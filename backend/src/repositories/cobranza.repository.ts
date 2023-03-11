import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Cobranza, CobranzaRelations} from '../models';

export class CobranzaRepository extends DefaultCrudRepository<
  Cobranza,
  typeof Cobranza.prototype.id,
  CobranzaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Cobranza, dataSource);
  }
}
