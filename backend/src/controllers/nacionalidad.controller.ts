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
import {Nacionalidad} from '../models';
import {NacionalidadRepository} from '../repositories';

export class NacionalidadController {
  constructor(
    @repository(NacionalidadRepository)
    public nacionalidadRepository : NacionalidadRepository,
  ) {}

  @post('/nacionalidads')
  @response(200, {
    description: 'Nacionalidad model instance',
    content: {'application/json': {schema: getModelSchemaRef(Nacionalidad)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nacionalidad, {
            title: 'NewNacionalidad',
            exclude: ['id'],
          }),
        },
      },
    })
    nacionalidad: Omit<Nacionalidad, 'id'>,
  ): Promise<Nacionalidad> {
    return this.nacionalidadRepository.create(nacionalidad);
  }

  @get('/nacionalidads/count')
  @response(200, {
    description: 'Nacionalidad model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Nacionalidad) where?: Where<Nacionalidad>,
  ): Promise<Count> {
    return this.nacionalidadRepository.count(where);
  }

  @get('/nacionalidads')
  @response(200, {
    description: 'Array of Nacionalidad model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Nacionalidad, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Nacionalidad) filter?: Filter<Nacionalidad>,
  ): Promise<Nacionalidad[]> {
    return this.nacionalidadRepository.find(filter);
  }

  @patch('/nacionalidads')
  @response(200, {
    description: 'Nacionalidad PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nacionalidad, {partial: true}),
        },
      },
    })
    nacionalidad: Nacionalidad,
    @param.where(Nacionalidad) where?: Where<Nacionalidad>,
  ): Promise<Count> {
    return this.nacionalidadRepository.updateAll(nacionalidad, where);
  }

  @get('/nacionalidads/{id}')
  @response(200, {
    description: 'Nacionalidad model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Nacionalidad, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Nacionalidad, {exclude: 'where'}) filter?: FilterExcludingWhere<Nacionalidad>
  ): Promise<Nacionalidad> {
    return this.nacionalidadRepository.findById(id, filter);
  }

  @patch('/nacionalidads/{id}')
  @response(204, {
    description: 'Nacionalidad PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nacionalidad, {partial: true}),
        },
      },
    })
    nacionalidad: Nacionalidad,
  ): Promise<void> {
    await this.nacionalidadRepository.updateById(id, nacionalidad);
  }

  @put('/nacionalidads/{id}')
  @response(204, {
    description: 'Nacionalidad PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nacionalidad: Nacionalidad,
  ): Promise<void> {
    await this.nacionalidadRepository.replaceById(id, nacionalidad);
  }

  @del('/nacionalidads/{id}')
  @response(204, {
    description: 'Nacionalidad DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nacionalidadRepository.deleteById(id);
  }
}
