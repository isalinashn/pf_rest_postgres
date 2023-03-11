import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Estadocivil} from '../models';
import {EstadocivilRepository} from '../repositories';

export class EstadocivilController {
  constructor(
    @repository(EstadocivilRepository)
    public estadocivilRepository : EstadocivilRepository,
  ) {}

  @post('/estadocivils')
  @response(200, {
    description: 'Estadocivil model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estadocivil)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadocivil, {
            title: 'NewEstadocivil',
            exclude: ['id'],
          }),
        },
      },
    })
    estadocivil: Omit<Estadocivil, 'id'>,
  ): Promise<Estadocivil> {
    return this.estadocivilRepository.create(estadocivil);
  }

  @get('/estadocivils/count')
  @response(200, {
    description: 'Estadocivil model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estadocivil) where?: Where<Estadocivil>,
  ): Promise<Count> {
    return this.estadocivilRepository.count(where);
  }

  @get('/estadocivils')
  @response(200, {
    description: 'Array of Estadocivil model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estadocivil, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estadocivil) filter?: Filter<Estadocivil>,
  ): Promise<Estadocivil[]> {
    return this.estadocivilRepository.find(filter);
  }

  @patch('/estadocivils')
  @response(200, {
    description: 'Estadocivil PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadocivil, {partial: true}),
        },
      },
    })
    estadocivil: Estadocivil,
    @param.where(Estadocivil) where?: Where<Estadocivil>,
  ): Promise<Count> {
    return this.estadocivilRepository.updateAll(estadocivil, where);
  }

  @get('/estadocivils/{id}')
  @response(200, {
    description: 'Estadocivil model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estadocivil, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estadocivil, {exclude: 'where'}) filter?: FilterExcludingWhere<Estadocivil>
  ): Promise<Estadocivil> {
    return this.estadocivilRepository.findById(id, filter);
  }

  @patch('/estadocivils/{id}')
  @response(204, {
    description: 'Estadocivil PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estadocivil, {partial: true}),
        },
      },
    })
    estadocivil: Estadocivil,
  ): Promise<void> {
    await this.estadocivilRepository.updateById(id, estadocivil);
  }

  @put('/estadocivils/{id}')
  @response(204, {
    description: 'Estadocivil PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estadocivil: Estadocivil,
  ): Promise<void> {
    await this.estadocivilRepository.replaceById(id, estadocivil);
  }

  @del('/estadocivils/{id}')
  @response(204, {
    description: 'Estadocivil DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estadocivilRepository.deleteById(id);
  }
}
