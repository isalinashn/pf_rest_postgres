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
import {Cuotadet} from '../models';
import {CuotadetRepository} from '../repositories';

export class CuotadetController {
  constructor(
    @repository(CuotadetRepository)
    public cuotadetRepository : CuotadetRepository,
  ) {}

  @post('/cuotadets')
  @response(200, {
    description: 'Cuotadet model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cuotadet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotadet, {
            title: 'NewCuotadet',
            exclude: ['id'],
          }),
        },
      },
    })
    cuotadet: Omit<Cuotadet, 'id'>,
  ): Promise<Cuotadet> {
    return this.cuotadetRepository.create(cuotadet);
  }

  @get('/cuotadets/count')
  @response(200, {
    description: 'Cuotadet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cuotadet) where?: Where<Cuotadet>,
  ): Promise<Count> {
    return this.cuotadetRepository.count(where);
  }

  @get('/cuotadets')
  @response(200, {
    description: 'Array of Cuotadet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cuotadet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cuotadet) filter?: Filter<Cuotadet>,
  ): Promise<Cuotadet[]> {
    return this.cuotadetRepository.find(filter);
  }

  @patch('/cuotadets')
  @response(200, {
    description: 'Cuotadet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotadet, {partial: true}),
        },
      },
    })
    cuotadet: Cuotadet,
    @param.where(Cuotadet) where?: Where<Cuotadet>,
  ): Promise<Count> {
    return this.cuotadetRepository.updateAll(cuotadet, where);
  }

  @get('/cuotadets/{id}')
  @response(200, {
    description: 'Cuotadet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cuotadet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cuotadet, {exclude: 'where'}) filter?: FilterExcludingWhere<Cuotadet>
  ): Promise<Cuotadet> {
    return this.cuotadetRepository.findById(id, filter);
  }

  @patch('/cuotadets/{id}')
  @response(204, {
    description: 'Cuotadet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotadet, {partial: true}),
        },
      },
    })
    cuotadet: Cuotadet,
  ): Promise<void> {
    await this.cuotadetRepository.updateById(id, cuotadet);
  }

  @put('/cuotadets/{id}')
  @response(204, {
    description: 'Cuotadet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuotadet: Cuotadet,
  ): Promise<void> {
    await this.cuotadetRepository.replaceById(id, cuotadet);
  }

  @del('/cuotadets/{id}')
  @response(204, {
    description: 'Cuotadet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuotadetRepository.deleteById(id);
  }
}
