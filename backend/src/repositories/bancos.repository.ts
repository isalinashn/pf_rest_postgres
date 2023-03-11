import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Bancos, BancosRelations} from '../models';

export class BancosRepository extends DefaultCrudRepository<
  Bancos,
  typeof Bancos.prototype.id,
  BancosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Bancos, dataSource);
  }
}
