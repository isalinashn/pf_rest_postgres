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
import {Bancos} from '../models';
import {BancosRepository} from '../repositories';

export class BancosController {
  constructor(
    @repository(BancosRepository)
    public bancosRepository : BancosRepository,
  ) {}

  @post('/bancos')
  @response(200, {
    description: 'Bancos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Bancos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bancos, {
            title: 'NewBancos',
            exclude: ['id'],
          }),
        },
      },
    })
    bancos: Omit<Bancos, 'id'>,
  ): Promise<Bancos> {
    return this.bancosRepository.create(bancos);
  }

  @get('/bancos/count')
  @response(200, {
    description: 'Bancos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Bancos) where?: Where<Bancos>,
  ): Promise<Count> {
    return this.bancosRepository.count(where);
  }

  @get('/bancos')
  @response(200, {
    description: 'Array of Bancos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Bancos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Bancos) filter?: Filter<Bancos>,
  ): Promise<Bancos[]> {
    return this.bancosRepository.find(filter);
  }

  @patch('/bancos')
  @response(200, {
    description: 'Bancos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bancos, {partial: true}),
        },
      },
    })
    bancos: Bancos,
    @param.where(Bancos) where?: Where<Bancos>,
  ): Promise<Count> {
    return this.bancosRepository.updateAll(bancos, where);
  }

  @get('/bancos/{id}')
  @response(200, {
    description: 'Bancos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Bancos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Bancos, {exclude: 'where'}) filter?: FilterExcludingWhere<Bancos>
  ): Promise<Bancos> {
    return this.bancosRepository.findById(id, filter);
  }

  @patch('/bancos/{id}')
  @response(204, {
    description: 'Bancos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bancos, {partial: true}),
        },
      },
    })
    bancos: Bancos,
  ): Promise<void> {
    await this.bancosRepository.updateById(id, bancos);
  }

  @put('/bancos/{id}')
  @response(204, {
    description: 'Bancos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bancos: Bancos,
  ): Promise<void> {
    await this.bancosRepository.replaceById(id, bancos);
  }

  @del('/bancos/{id}')
  @response(204, {
    description: 'Bancos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bancosRepository.deleteById(id);
  }
}
