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
import {LoteColindancias} from '../models';
import {LoteColindanciasRepository} from '../repositories';

export class LotecolindanciasController {
  constructor(
    @repository(LoteColindanciasRepository)
    public loteColindanciasRepository : LoteColindanciasRepository,
  ) {}

  @post('/lote-colindancias')
  @response(200, {
    description: 'LoteColindancias model instance',
    content: {'application/json': {schema: getModelSchemaRef(LoteColindancias)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteColindancias, {
            title: 'NewLoteColindancias',
            exclude: ['id'],
          }),
        },
      },
    })
    loteColindancias: Omit<LoteColindancias, 'id'>,
  ): Promise<LoteColindancias> {
    return this.loteColindanciasRepository.create(loteColindancias);
  }

  @get('/lote-colindancias/count')
  @response(200, {
    description: 'LoteColindancias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LoteColindancias) where?: Where<LoteColindancias>,
  ): Promise<Count> {
    return this.loteColindanciasRepository.count(where);
  }

  @get('/lote-colindancias')
  @response(200, {
    description: 'Array of LoteColindancias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LoteColindancias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LoteColindancias) filter?: Filter<LoteColindancias>,
  ): Promise<LoteColindancias[]> {
    return this.loteColindanciasRepository.find(filter);
  }

  @patch('/lote-colindancias')
  @response(200, {
    description: 'LoteColindancias PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteColindancias, {partial: true}),
        },
      },
    })
    loteColindancias: LoteColindancias,
    @param.where(LoteColindancias) where?: Where<LoteColindancias>,
  ): Promise<Count> {
    return this.loteColindanciasRepository.updateAll(loteColindancias, where);
  }

  @get('/lote-colindancias/{id}')
  @response(200, {
    description: 'LoteColindancias model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LoteColindancias, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LoteColindancias, {exclude: 'where'}) filter?: FilterExcludingWhere<LoteColindancias>
  ): Promise<LoteColindancias> {
    return this.loteColindanciasRepository.findById(id, filter);
  }

  @patch('/lote-colindancias/{id}')
  @response(204, {
    description: 'LoteColindancias PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteColindancias, {partial: true}),
        },
      },
    })
    loteColindancias: LoteColindancias,
  ): Promise<void> {
    await this.loteColindanciasRepository.updateById(id, loteColindancias);
  }

  @put('/lote-colindancias/{id}')
  @response(204, {
    description: 'LoteColindancias PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() loteColindancias: LoteColindancias,
  ): Promise<void> {
    await this.loteColindanciasRepository.replaceById(id, loteColindancias);
  }

  @del('/lote-colindancias/{id}')
  @response(204, {
    description: 'LoteColindancias DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.loteColindanciasRepository.deleteById(id);
  }
}
