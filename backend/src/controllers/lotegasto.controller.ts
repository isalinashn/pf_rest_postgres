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
import {LoteGasto} from '../models';
import {LoteGastoRepository} from '../repositories';

export class LotegastoController {
  constructor(
    @repository(LoteGastoRepository)
    public loteGastoRepository : LoteGastoRepository,
  ) {}

  @post('/lote-gastos')
  @response(200, {
    description: 'LoteGasto model instance',
    content: {'application/json': {schema: getModelSchemaRef(LoteGasto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteGasto, {
            title: 'NewLoteGasto',
            exclude: ['id'],
          }),
        },
      },
    })
    loteGasto: Omit<LoteGasto, 'id'>,
  ): Promise<LoteGasto> {
    return this.loteGastoRepository.create(loteGasto);
  }

  @get('/lote-gastos/count')
  @response(200, {
    description: 'LoteGasto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LoteGasto) where?: Where<LoteGasto>,
  ): Promise<Count> {
    return this.loteGastoRepository.count(where);
  }

  @get('/lote-gastos')
  @response(200, {
    description: 'Array of LoteGasto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LoteGasto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LoteGasto) filter?: Filter<LoteGasto>,
  ): Promise<LoteGasto[]> {
    return this.loteGastoRepository.find(filter);
  }

  @patch('/lote-gastos')
  @response(200, {
    description: 'LoteGasto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteGasto, {partial: true}),
        },
      },
    })
    loteGasto: LoteGasto,
    @param.where(LoteGasto) where?: Where<LoteGasto>,
  ): Promise<Count> {
    return this.loteGastoRepository.updateAll(loteGasto, where);
  }

  @get('/lote-gastos/{id}')
  @response(200, {
    description: 'LoteGasto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LoteGasto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LoteGasto, {exclude: 'where'}) filter?: FilterExcludingWhere<LoteGasto>
  ): Promise<LoteGasto> {
    return this.loteGastoRepository.findById(id, filter);
  }

  @patch('/lote-gastos/{id}')
  @response(204, {
    description: 'LoteGasto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoteGasto, {partial: true}),
        },
      },
    })
    loteGasto: LoteGasto,
  ): Promise<void> {
    await this.loteGastoRepository.updateById(id, loteGasto);
  }

  @put('/lote-gastos/{id}')
  @response(204, {
    description: 'LoteGasto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() loteGasto: LoteGasto,
  ): Promise<void> {
    await this.loteGastoRepository.replaceById(id, loteGasto);
  }

  @del('/lote-gastos/{id}')
  @response(204, {
    description: 'LoteGasto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.loteGastoRepository.deleteById(id);
  }
}
