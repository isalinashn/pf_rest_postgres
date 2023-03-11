import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Pagocab, PagocabRelations} from '../models';

export class PagocabRepository extends DefaultCrudRepository<
  Pagocab,
  typeof Pagocab.prototype.pagocabid,
  PagocabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Pagocab, dataSource);
  }
}
