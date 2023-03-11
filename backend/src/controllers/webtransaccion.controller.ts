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
import {Webtransaccion} from '../models';
import {WebtransaccionRepository} from '../repositories';

export class WebtransaccionController {
  constructor(
    @repository(WebtransaccionRepository)
    public webtransaccionRepository : WebtransaccionRepository,
  ) {}

  @post('/webtransaccions')
  @response(200, {
    description: 'Webtransaccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Webtransaccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webtransaccion, {
            title: 'NewWebtransaccion',
            exclude: ['id'],
          }),
        },
      },
    })
    webtransaccion: Omit<Webtransaccion, 'id'>,
  ): Promise<Webtransaccion> {
    return this.webtransaccionRepository.create(webtransaccion);
  }

  @get('/webtransaccions/count')
  @response(200, {
    description: 'Webtransaccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Webtransaccion) where?: Where<Webtransaccion>,
  ): Promise<Count> {
    return this.webtransaccionRepository.count(where);
  }

  @get('/webtransaccions')
  @response(200, {
    description: 'Array of Webtransaccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Webtransaccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Webtransaccion) filter?: Filter<Webtransaccion>,
  ): Promise<Webtransaccion[]> {
    return this.webtransaccionRepository.find(filter);
  }

  @patch('/webtransaccions')
  @response(200, {
    description: 'Webtransaccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webtransaccion, {partial: true}),
        },
      },
    })
    webtransaccion: Webtransaccion,
    @param.where(Webtransaccion) where?: Where<Webtransaccion>,
  ): Promise<Count> {
    return this.webtransaccionRepository.updateAll(webtransaccion, where);
  }

  @get('/webtransaccions/{id}')
  @response(200, {
    description: 'Webtransaccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Webtransaccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Webtransaccion, {exclude: 'where'}) filter?: FilterExcludingWhere<Webtransaccion>
  ): Promise<Webtransaccion> {
    return this.webtransaccionRepository.findById(id, filter);
  }

  @patch('/webtransaccions/{id}')
  @response(204, {
    description: 'Webtransaccion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Webtransaccion, {partial: true}),
        },
      },
    })
    webtransaccion: Webtransaccion,
  ): Promise<void> {
    await this.webtransaccionRepository.updateById(id, webtransaccion);
  }

  @put('/webtransaccions/{id}')
  @response(204, {
    description: 'Webtransaccion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() webtransaccion: Webtransaccion,
  ): Promise<void> {
    await this.webtransaccionRepository.replaceById(id, webtransaccion);
  }

  @del('/webtransaccions/{id}')
  @response(204, {
    description: 'Webtransaccion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.webtransaccionRepository.deleteById(id);
  }
}
