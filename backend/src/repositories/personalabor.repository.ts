import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Personalabor, PersonalaborRelations} from '../models';

export class PersonalaborRepository extends DefaultCrudRepository<
  Personalabor,
  typeof Personalabor.prototype.personalaborid,
  PersonalaborRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Personalabor, dataSource);
  }
}
