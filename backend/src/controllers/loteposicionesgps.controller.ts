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
import {LotePosicionesgps} from '../models';
import {LotePosicionesgpsRepository} from '../repositories';

export class LoteposicionesgpsController {
  constructor(
    @repository(LotePosicionesgpsRepository)
    public lotePosicionesgpsRepository : LotePosicionesgpsRepository,
  ) {}

  @post('/lote-posicionesgps')
  @response(200, {
    description: 'LotePosicionesgps model instance',
    content: {'application/json': {schema: getModelSchemaRef(LotePosicionesgps)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotePosicionesgps, {
            title: 'NewLotePosicionesgps',
            exclude: ['id'],
          }),
        },
      },
    })
    lotePosicionesgps: Omit<LotePosicionesgps, 'id'>,
  ): Promise<LotePosicionesgps> {
    return this.lotePosicionesgpsRepository.create(lotePosicionesgps);
  }

  @get('/lote-posicionesgps/count')
  @response(200, {
    description: 'LotePosicionesgps model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LotePosicionesgps) where?: Where<LotePosicionesgps>,
  ): Promise<Count> {
    return this.lotePosicionesgpsRepository.count(where);
  }

  @get('/lote-posicionesgps')
  @response(200, {
    description: 'Array of LotePosicionesgps model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LotePosicionesgps, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LotePosicionesgps) filter?: Filter<LotePosicionesgps>,
  ): Promise<LotePosicionesgps[]> {
    return this.lotePosicionesgpsRepository.find(filter);
  }

  @patch('/lote-posicionesgps')
  @response(200, {
    description: 'LotePosicionesgps PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotePosicionesgps, {partial: true}),
        },
      },
    })
    lotePosicionesgps: LotePosicionesgps,
    @param.where(LotePosicionesgps) where?: Where<LotePosicionesgps>,
  ): Promise<Count> {
    return this.lotePosicionesgpsRepository.updateAll(lotePosicionesgps, where);
  }

  @get('/lote-posicionesgps/{id}')
  @response(200, {
    description: 'LotePosicionesgps model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LotePosicionesgps, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LotePosicionesgps, {exclude: 'where'}) filter?: FilterExcludingWhere<LotePosicionesgps>
  ): Promise<LotePosicionesgps> {
    return this.lotePosicionesgpsRepository.findById(id, filter);
  }

  @patch('/lote-posicionesgps/{id}')
  @response(204, {
    description: 'LotePosicionesgps PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotePosicionesgps, {partial: true}),
        },
      },
    })
    lotePosicionesgps: LotePosicionesgps,
  ): Promise<void> {
    await this.lotePosicionesgpsRepository.updateById(id, lotePosicionesgps);
  }

  @put('/lote-posicionesgps/{id}')
  @response(204, {
    description: 'LotePosicionesgps PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lotePosicionesgps: LotePosicionesgps,
  ): Promise<void> {
    await this.lotePosicionesgpsRepository.replaceById(id, lotePosicionesgps);
  }

  @del('/lote-posicionesgps/{id}')
  @response(204, {
    description: 'LotePosicionesgps DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lotePosicionesgpsRepository.deleteById(id);
  }
}
