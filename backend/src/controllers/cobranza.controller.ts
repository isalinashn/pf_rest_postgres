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
import {Cobranza} from '../models';
import {CobranzaRepository} from '../repositories';

export class CobranzaController {
  constructor(
    @repository(CobranzaRepository)
    public cobranzaRepository : CobranzaRepository,
  ) {}

  @post('/cobranzas')
  @response(200, {
    description: 'Cobranza model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cobranza)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cobranza, {
            title: 'NewCobranza',
            exclude: ['id'],
          }),
        },
      },
    })
    cobranza: Omit<Cobranza, 'id'>,
  ): Promise<Cobranza> {
    return this.cobranzaRepository.create(cobranza);
  }

  @get('/cobranzas/count')
  @response(200, {
    description: 'Cobranza model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cobranza) where?: Where<Cobranza>,
  ): Promise<Count> {
    return this.cobranzaRepository.count(where);
  }

  @get('/cobranzas')
  @response(200, {
    description: 'Array of Cobranza model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cobranza, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cobranza) filter?: Filter<Cobranza>,
  ): Promise<Cobranza[]> {
    return this.cobranzaRepository.find(filter);
  }

  @patch('/cobranzas')
  @response(200, {
    description: 'Cobranza PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cobranza, {partial: true}),
        },
      },
    })
    cobranza: Cobranza,
    @param.where(Cobranza) where?: Where<Cobranza>,
  ): Promise<Count> {
    return this.cobranzaRepository.updateAll(cobranza, where);
  }

  @get('/cobranzas/{id}')
  @response(200, {
    description: 'Cobranza model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cobranza, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cobranza, {exclude: 'where'}) filter?: FilterExcludingWhere<Cobranza>
  ): Promise<Cobranza> {
    return this.cobranzaRepository.findById(id, filter);
  }

  @patch('/cobranzas/{id}')
  @response(204, {
    description: 'Cobranza PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cobranza, {partial: true}),
        },
      },
    })
    cobranza: Cobranza,
  ): Promise<void> {
    await this.cobranzaRepository.updateById(id, cobranza);
  }

  @put('/cobranzas/{id}')
  @response(204, {
    description: 'Cobranza PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cobranza: Cobranza,
  ): Promise<void> {
    await this.cobranzaRepository.replaceById(id, cobranza);
  }

  @del('/cobranzas/{id}')
  @response(204, {
    description: 'Cobranza DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cobranzaRepository.deleteById(id);
  }
}
