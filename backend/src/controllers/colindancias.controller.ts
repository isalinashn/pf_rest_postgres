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
import {Colindancias} from '../models';
import {ColindanciasRepository} from '../repositories';

export class ColindanciasController {
  constructor(
    @repository(ColindanciasRepository)
    public colindanciasRepository : ColindanciasRepository,
  ) {}

  @post('/colindancias')
  @response(200, {
    description: 'Colindancias model instance',
    content: {'application/json': {schema: getModelSchemaRef(Colindancias)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colindancias, {
            title: 'NewColindancias',
            exclude: ['id'],
          }),
        },
      },
    })
    colindancias: Omit<Colindancias, 'id'>,
  ): Promise<Colindancias> {
    return this.colindanciasRepository.create(colindancias);
  }

  @get('/colindancias/count')
  @response(200, {
    description: 'Colindancias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Colindancias) where?: Where<Colindancias>,
  ): Promise<Count> {
    return this.colindanciasRepository.count(where);
  }

  @get('/colindancias')
  @response(200, {
    description: 'Array of Colindancias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Colindancias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Colindancias) filter?: Filter<Colindancias>,
  ): Promise<Colindancias[]> {
    return this.colindanciasRepository.find(filter);
  }

  @patch('/colindancias')
  @response(200, {
    description: 'Colindancias PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colindancias, {partial: true}),
        },
      },
    })
    colindancias: Colindancias,
    @param.where(Colindancias) where?: Where<Colindancias>,
  ): Promise<Count> {
    return this.colindanciasRepository.updateAll(colindancias, where);
  }

  @get('/colindancias/{id}')
  @response(200, {
    description: 'Colindancias model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Colindancias, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Colindancias, {exclude: 'where'}) filter?: FilterExcludingWhere<Colindancias>
  ): Promise<Colindancias> {
    return this.colindanciasRepository.findById(id, filter);
  }

  @patch('/colindancias/{id}')
  @response(204, {
    description: 'Colindancias PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colindancias, {partial: true}),
        },
      },
    })
    colindancias: Colindancias,
  ): Promise<void> {
    await this.colindanciasRepository.updateById(id, colindancias);
  }

  @put('/colindancias/{id}')
  @response(204, {
    description: 'Colindancias PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() colindancias: Colindancias,
  ): Promise<void> {
    await this.colindanciasRepository.replaceById(id, colindancias);
  }

  @del('/colindancias/{id}')
  @response(204, {
    description: 'Colindancias DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.colindanciasRepository.deleteById(id);
  }
}
