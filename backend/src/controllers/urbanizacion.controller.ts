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
import {Urbanizacion} from '../models';
import {UrbanizacionRepository} from '../repositories';

export class UrbanizacionController {
  constructor(
    @repository(UrbanizacionRepository)
    public urbanizacionRepository : UrbanizacionRepository,
  ) {}

  @post('/urbanizacions')
  @response(200, {
    description: 'Urbanizacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Urbanizacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacion, {
            title: 'NewUrbanizacion',
            exclude: ['id'],
          }),
        },
      },
    })
    urbanizacion: Omit<Urbanizacion, 'id'>,
  ): Promise<Urbanizacion> {
    return this.urbanizacionRepository.create(urbanizacion);
  }

  @get('/urbanizacions/count')
  @response(200, {
    description: 'Urbanizacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Urbanizacion) where?: Where<Urbanizacion>,
  ): Promise<Count> {
    return this.urbanizacionRepository.count(where);
  }

  @get('/urbanizacions')
  @response(200, {
    description: 'Array of Urbanizacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Urbanizacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Urbanizacion) filter?: Filter<Urbanizacion>,
  ): Promise<Urbanizacion[]> {
    return this.urbanizacionRepository.find(filter);
  }

  @patch('/urbanizacions')
  @response(200, {
    description: 'Urbanizacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacion, {partial: true}),
        },
      },
    })
    urbanizacion: Urbanizacion,
    @param.where(Urbanizacion) where?: Where<Urbanizacion>,
  ): Promise<Count> {
    return this.urbanizacionRepository.updateAll(urbanizacion, where);
  }

  @get('/urbanizacions/{id}')
  @response(200, {
    description: 'Urbanizacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Urbanizacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Urbanizacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Urbanizacion>
  ): Promise<Urbanizacion> {
    return this.urbanizacionRepository.findById(id, filter);
  }

  @patch('/urbanizacions/{id}')
  @response(204, {
    description: 'Urbanizacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Urbanizacion, {partial: true}),
        },
      },
    })
    urbanizacion: Urbanizacion,
  ): Promise<void> {
    await this.urbanizacionRepository.updateById(id, urbanizacion);
  }

  @put('/urbanizacions/{id}')
  @response(204, {
    description: 'Urbanizacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() urbanizacion: Urbanizacion,
  ): Promise<void> {
    await this.urbanizacionRepository.replaceById(id, urbanizacion);
  }

  @del('/urbanizacions/{id}')
  @response(204, {
    description: 'Urbanizacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.urbanizacionRepository.deleteById(id);
  }
}
