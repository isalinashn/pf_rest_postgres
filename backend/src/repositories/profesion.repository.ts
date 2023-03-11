import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Profesion, ProfesionRelations} from '../models';

export class ProfesionRepository extends DefaultCrudRepository<
  Profesion,
  typeof Profesion.prototype.profesionid,
  ProfesionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Profesion, dataSource);
  }
}
