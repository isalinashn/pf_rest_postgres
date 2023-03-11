import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Colindancias, ColindanciasRelations} from '../models';

export class ColindanciasRepository extends DefaultCrudRepository<
  Colindancias,
  typeof Colindancias.prototype.id,
  ColindanciasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Colindancias, dataSource);
  }
}
