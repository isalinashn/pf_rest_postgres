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
import {Lote} from '../models';
import {LoteRepository} from '../repositories';

export class LoteController {
  constructor(
    @repository(LoteRepository)
    public loteRepository : LoteRepository,
  ) {}

  @post('/lotes')
  @response(200, {
    description: 'Lote model instance',
    content: {'application/json': {schema: getModelSchemaRef(Lote)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lote, {
            title: 'NewLote',
            exclude: ['id'],
          }),
        },
      },
    })
    lote: Omit<Lote, 'id'>,
  ): Promise<Lote> {
    return this.loteRepository.create(lote);
  }

  @get('/lotes/count')
  @response(200, {
    description: 'Lote model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Lote) where?: Where<Lote>,
  ): Promise<Count> {
    return this.loteRepository.count(where);
  }

  @get('/lotes')
  @response(200, {
    description: 'Array of Lote model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Lote, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Lote) filter?: Filter<Lote>,
  ): Promise<Lote[]> {
    return this.loteRepository.find(filter);
  }

  @patch('/lotes')
  @response(200, {
    description: 'Lote PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lote, {partial: true}),
        },
      },
    })
    lote: Lote,
    @param.where(Lote) where?: Where<Lote>,
  ): Promise<Count> {
    return this.loteRepository.updateAll(lote, where);
  }

  @get('/lotes/{id}')
  @response(200, {
    description: 'Lote model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Lote, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Lote, {exclude: 'where'}) filter?: FilterExcludingWhere<Lote>
  ): Promise<Lote> {
    return this.loteRepository.findById(id, filter);
  }

  @patch('/lotes/{id}')
  @response(204, {
    description: 'Lote PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lote, {partial: true}),
        },
      },
    })
    lote: Lote,
  ): Promise<void> {
    await this.loteRepository.updateById(id, lote);
  }

  @put('/lotes/{id}')
  @response(204, {
    description: 'Lote PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lote: Lote,
  ): Promise<void> {
    await this.loteRepository.replaceById(id, lote);
  }

  @del('/lotes/{id}')
  @response(204, {
    description: 'Lote DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.loteRepository.deleteById(id);
  }
}
