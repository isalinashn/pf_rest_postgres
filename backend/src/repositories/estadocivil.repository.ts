import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Estadocivil, EstadocivilRelations} from '../models';

export class EstadocivilRepository extends DefaultCrudRepository<
  Estadocivil,
  typeof Estadocivil.prototype.estadocivilid,
  EstadocivilRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Estadocivil, dataSource);
  }
}
