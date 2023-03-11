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
import {Recibocab} from '../models';
import {RecibocabRepository} from '../repositories';

export class RecibocabController {
  constructor(
    @repository(RecibocabRepository)
    public recibocabRepository : RecibocabRepository,
  ) {}

  @post('/recibocabs')
  @response(200, {
    description: 'Recibocab model instance',
    content: {'application/json': {schema: getModelSchemaRef(Recibocab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recibocab, {
            title: 'NewRecibocab',
            exclude: ['id'],
          }),
        },
      },
    })
    recibocab: Omit<Recibocab, 'id'>,
  ): Promise<Recibocab> {
    return this.recibocabRepository.create(recibocab);
  }

  @get('/recibocabs/count')
  @response(200, {
    description: 'Recibocab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Recibocab) where?: Where<Recibocab>,
  ): Promise<Count> {
    return this.recibocabRepository.count(where);
  }

  @get('/recibocabs')
  @response(200, {
    description: 'Array of Recibocab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Recibocab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Recibocab) filter?: Filter<Recibocab>,
  ): Promise<Recibocab[]> {
    return this.recibocabRepository.find(filter);
  }

  @patch('/recibocabs')
  @response(200, {
    description: 'Recibocab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recibocab, {partial: true}),
        },
      },
    })
    recibocab: Recibocab,
    @param.where(Recibocab) where?: Where<Recibocab>,
  ): Promise<Count> {
    return this.recibocabRepository.updateAll(recibocab, where);
  }

  @get('/recibocabs/{id}')
  @response(200, {
    description: 'Recibocab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Recibocab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Recibocab, {exclude: 'where'}) filter?: FilterExcludingWhere<Recibocab>
  ): Promise<Recibocab> {
    return this.recibocabRepository.findById(id, filter);
  }

  @patch('/recibocabs/{id}')
  @response(204, {
    description: 'Recibocab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recibocab, {partial: true}),
        },
      },
    })
    recibocab: Recibocab,
  ): Promise<void> {
    await this.recibocabRepository.updateById(id, recibocab);
  }

  @put('/recibocabs/{id}')
  @response(204, {
    description: 'Recibocab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recibocab: Recibocab,
  ): Promise<void> {
    await this.recibocabRepository.replaceById(id, recibocab);
  }

  @del('/recibocabs/{id}')
  @response(204, {
    description: 'Recibocab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recibocabRepository.deleteById(id);
  }
}
