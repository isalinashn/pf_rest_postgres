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
import {Webrespuesta} from '../models';
import {WebrespuestaRepository} from '../repositories';

export class WebrespuestaController {
  constructor(
    @repository(WebrespuestaRepository)
    public webrespuestaRepository : WebrespuestaRepository,
  ) {}

  @post('/webrespuestas')
  @response(200, {
    description: 'Webrespuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Webrespuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webrespuesta, {
            title: 'NewWebrespuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    webrespuesta: Omit<Webrespuesta, 'id'>,
  ): Promise<Webrespuesta> {
    return this.webrespuestaRepository.create(webrespuesta);
  }

  @get('/webrespuestas/count')
  @response(200, {
    description: 'Webrespuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Webrespuesta) where?: Where<Webrespuesta>,
  ): Promise<Count> {
    return this.webrespuestaRepository.count(where);
  }

  @get('/webrespuestas')
  @response(200, {
    description: 'Array of Webrespuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Webrespuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Webrespuesta) filter?: Filter<Webrespuesta>,
  ): Promise<Webrespuesta[]> {
    return this.webrespuestaRepository.find(filter);
  }

  @patch('/webrespuestas')
  @response(200, {
    description: 'Webrespuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webrespuesta, {partial: true}),
        },
      },
    })
    webrespuesta: Webrespuesta,
    @param.where(Webrespuesta) where?: Where<Webrespuesta>,
  ): Promise<Count> {
    return this.webrespuestaRepository.updateAll(webrespuesta, where);
  }

  @get('/webrespuestas/{id}')
  @response(200, {
    description: 'Webrespuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Webrespuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Webrespuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<Webrespuesta>
  ): Promise<Webrespuesta> {
    return this.webrespuestaRepository.findById(id, filter);
  }

  @patch('/webrespuestas/{id}')
  @response(204, {
    description: 'Webrespuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webrespuesta, {partial: true}),
        },
      },
    })
    webrespuesta: Webrespuesta,
  ): Promise<void> {
    await this.webrespuestaRepository.updateById(id, webrespuesta);
  }

  @put('/webrespuestas/{id}')
  @response(204, {
    description: 'Webrespuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() webrespuesta: Webrespuesta,
  ): Promise<void> {
    await this.webrespuestaRepository.replaceById(id, webrespuesta);
  }

  @del('/webrespuestas/{id}')
  @response(204, {
    description: 'Webrespuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.webrespuestaRepository.deleteById(id);
  }
}
