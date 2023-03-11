import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Recibocab, RecibocabRelations} from '../models';

export class RecibocabRepository extends DefaultCrudRepository<
  Recibocab,
  typeof Recibocab.prototype.recibocabid,
  RecibocabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Recibocab, dataSource);
  }
}
