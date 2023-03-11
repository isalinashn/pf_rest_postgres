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
import {Tipocasa} from '../models';
import {TipocasaRepository} from '../repositories';

export class TipocasaController {
  constructor(
    @repository(TipocasaRepository)
    public tipocasaRepository : TipocasaRepository,
  ) {}

  @post('/tipocasas')
  @response(200, {
    description: 'Tipocasa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipocasa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipocasa, {
            title: 'NewTipocasa',
            exclude: ['id'],
          }),
        },
      },
    })
    tipocasa: Omit<Tipocasa, 'id'>,
  ): Promise<Tipocasa> {
    return this.tipocasaRepository.create(tipocasa);
  }

  @get('/tipocasas/count')
  @response(200, {
    description: 'Tipocasa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipocasa) where?: Where<Tipocasa>,
  ): Promise<Count> {
    return this.tipocasaRepository.count(where);
  }

  @get('/tipocasas')
  @response(200, {
    description: 'Array of Tipocasa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipocasa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipocasa) filter?: Filter<Tipocasa>,
  ): Promise<Tipocasa[]> {
    return this.tipocasaRepository.find(filter);
  }

  @patch('/tipocasas')
  @response(200, {
    description: 'Tipocasa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipocasa, {partial: true}),
        },
      },
    })
    tipocasa: Tipocasa,
    @param.where(Tipocasa) where?: Where<Tipocasa>,
  ): Promise<Count> {
    return this.tipocasaRepository.updateAll(tipocasa, where);
  }

  @get('/tipocasas/{id}')
  @response(200, {
    description: 'Tipocasa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipocasa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tipocasa, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipocasa>
  ): Promise<Tipocasa> {
    return this.tipocasaRepository.findById(id, filter);
  }

  @patch('/tipocasas/{id}')
  @response(204, {
    description: 'Tipocasa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipocasa, {partial: true}),
        },
      },
    })
    tipocasa: Tipocasa,
  ): Promise<void> {
    await this.tipocasaRepository.updateById(id, tipocasa);
  }

  @put('/tipocasas/{id}')
  @response(204, {
    description: 'Tipocasa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipocasa: Tipocasa,
  ): Promise<void> {
    await this.tipocasaRepository.replaceById(id, tipocasa);
  }

  @del('/tipocasas/{id}')
  @response(204, {
    description: 'Tipocasa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipocasaRepository.deleteById(id);
  }
}
