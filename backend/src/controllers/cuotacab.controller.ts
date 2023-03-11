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
import {Cuotacab} from '../models';
import {CuotacabRepository} from '../repositories';

export class CuotacabController {
  constructor(
    @repository(CuotacabRepository)
    public cuotacabRepository : CuotacabRepository,
  ) {}

  @post('/cuotacabs')
  @response(200, {
    description: 'Cuotacab model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cuotacab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotacab, {
            title: 'NewCuotacab',
            exclude: ['id'],
          }),
        },
      },
    })
    cuotacab: Omit<Cuotacab, 'id'>,
  ): Promise<Cuotacab> {
    return this.cuotacabRepository.create(cuotacab);
  }

  @get('/cuotacabs/count')
  @response(200, {
    description: 'Cuotacab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cuotacab) where?: Where<Cuotacab>,
  ): Promise<Count> {
    return this.cuotacabRepository.count(where);
  }

  @get('/cuotacabs')
  @response(200, {
    description: 'Array of Cuotacab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cuotacab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cuotacab) filter?: Filter<Cuotacab>,
  ): Promise<Cuotacab[]> {
    return this.cuotacabRepository.find(filter);
  }

  @patch('/cuotacabs')
  @response(200, {
    description: 'Cuotacab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotacab, {partial: true}),
        },
      },
    })
    cuotacab: Cuotacab,
    @param.where(Cuotacab) where?: Where<Cuotacab>,
  ): Promise<Count> {
    return this.cuotacabRepository.updateAll(cuotacab, where);
  }

  @get('/cuotacabs/{id}')
  @response(200, {
    description: 'Cuotacab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cuotacab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cuotacab, {exclude: 'where'}) filter?: FilterExcludingWhere<Cuotacab>
  ): Promise<Cuotacab> {
    return this.cuotacabRepository.findById(id, filter);
  }

  @patch('/cuotacabs/{id}')
  @response(204, {
    description: 'Cuotacab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cuotacab, {partial: true}),
        },
      },
    })
    cuotacab: Cuotacab,
  ): Promise<void> {
    await this.cuotacabRepository.updateById(id, cuotacab);
  }

  @put('/cuotacabs/{id}')
  @response(204, {
    description: 'Cuotacab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuotacab: Cuotacab,
  ): Promise<void> {
    await this.cuotacabRepository.replaceById(id, cuotacab);
  }

  @del('/cuotacabs/{id}')
  @response(204, {
    description: 'Cuotacab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuotacabRepository.deleteById(id);
  }
}
