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
import {Localidad} from '../models';
import {LocalidadRepository} from '../repositories';

export class LocalidadController {
  constructor(
    @repository(LocalidadRepository)
    public localidadRepository : LocalidadRepository,
  ) {}

  @post('/localidads')
  @response(200, {
    description: 'Localidad model instance',
    content: {'application/json': {schema: getModelSchemaRef(Localidad)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidad, {
            title: 'NewLocalidad',
            exclude: ['id'],
          }),
        },
      },
    })
    localidad: Omit<Localidad, 'id'>,
  ): Promise<Localidad> {
    return this.localidadRepository.create(localidad);
  }

  @get('/localidads/count')
  @response(200, {
    description: 'Localidad model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Localidad) where?: Where<Localidad>,
  ): Promise<Count> {
    return this.localidadRepository.count(where);
  }

  @get('/localidads')
  @response(200, {
    description: 'Array of Localidad model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Localidad, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Localidad) filter?: Filter<Localidad>,
  ): Promise<Localidad[]> {
    return this.localidadRepository.find(filter);
  }

  @patch('/localidads')
  @response(200, {
    description: 'Localidad PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidad, {partial: true}),
        },
      },
    })
    localidad: Localidad,
    @param.where(Localidad) where?: Where<Localidad>,
  ): Promise<Count> {
    return this.localidadRepository.updateAll(localidad, where);
  }

  @get('/localidads/{id}')
  @response(200, {
    description: 'Localidad model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Localidad, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Localidad, {exclude: 'where'}) filter?: FilterExcludingWhere<Localidad>
  ): Promise<Localidad> {
    return this.localidadRepository.findById(id, filter);
  }

  @patch('/localidads/{id}')
  @response(204, {
    description: 'Localidad PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidad, {partial: true}),
        },
      },
    })
    localidad: Localidad,
  ): Promise<void> {
    await this.localidadRepository.updateById(id, localidad);
  }

  @put('/localidads/{id}')
  @response(204, {
    description: 'Localidad PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() localidad: Localidad,
  ): Promise<void> {
    await this.localidadRepository.replaceById(id, localidad);
  }

  @del('/localidads/{id}')
  @response(204, {
    description: 'Localidad DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.localidadRepository.deleteById(id);
  }
}
