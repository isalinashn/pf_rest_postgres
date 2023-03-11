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
import {Urbanizacionacceso} from '../models';
import {UrbanizacionaccesoRepository} from '../repositories';

export class UrbanizacionaccesoController {
  constructor(
    @repository(UrbanizacionaccesoRepository)
    public urbanizacionaccesoRepository : UrbanizacionaccesoRepository,
  ) {}

  @post('/urbanizacionaccesos')
  @response(200, {
    description: 'Urbanizacionacceso model instance',
    content: {'application/json': {schema: getModelSchemaRef(Urbanizacionacceso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacionacceso, {
            title: 'NewUrbanizacionacceso',
            exclude: ['id'],
          }),
        },
      },
    })
    urbanizacionacceso: Omit<Urbanizacionacceso, 'id'>,
  ): Promise<Urbanizacionacceso> {
    return this.urbanizacionaccesoRepository.create(urbanizacionacceso);
  }

  @get('/urbanizacionaccesos/count')
  @response(200, {
    description: 'Urbanizacionacceso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Urbanizacionacceso) where?: Where<Urbanizacionacceso>,
  ): Promise<Count> {
    return this.urbanizacionaccesoRepository.count(where);
  }

  @get('/urbanizacionaccesos')
  @response(200, {
    description: 'Array of Urbanizacionacceso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Urbanizacionacceso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Urbanizacionacceso) filter?: Filter<Urbanizacionacceso>,
  ): Promise<Urbanizacionacceso[]> {
    return this.urbanizacionaccesoRepository.find(filter);
  }

  @patch('/urbanizacionaccesos')
  @response(200, {
    description: 'Urbanizacionacceso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacionacceso, {partial: true}),
        },
      },
    })
    urbanizacionacceso: Urbanizacionacceso,
    @param.where(Urbanizacionacceso) where?: Where<Urbanizacionacceso>,
  ): Promise<Count> {
    return this.urbanizacionaccesoRepository.updateAll(urbanizacionacceso, where);
  }

  @get('/urbanizacionaccesos/{id}')
  @response(200, {
    description: 'Urbanizacionacceso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Urbanizacionacceso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Urbanizacionacceso, {exclude: 'where'}) filter?: FilterExcludingWhere<Urbanizacionacceso>
  ): Promise<Urbanizacionacceso> {
    return this.urbanizacionaccesoRepository.findById(id, filter);
  }

  @patch('/urbanizacionaccesos/{id}')
  @response(204, {
    description: 'Urbanizacionacceso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacionacceso, {partial: true}),
        },
      },
    })
    urbanizacionacceso: Urbanizacionacceso,
  ): Promise<void> {
    await this.urbanizacionaccesoRepository.updateById(id, urbanizacionacceso);
  }

  @put('/urbanizacionaccesos/{id}')
  @response(204, {
    description: 'Urbanizacionacceso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() urbanizacionacceso: Urbanizacionacceso,
  ): Promise<void> {
    await this.urbanizacionaccesoRepository.replaceById(id, urbanizacionacceso);
  }

  @del('/urbanizacionaccesos/{id}')
  @response(204, {
    description: 'Urbanizacionacceso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.urbanizacionaccesoRepository.deleteById(id);
  }
}
