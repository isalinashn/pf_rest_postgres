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
import {Pagocab} from '../models';
import {PagocabRepository} from '../repositories';

export class PagocabController {
  constructor(
    @repository(PagocabRepository)
    public pagocabRepository : PagocabRepository,
  ) {}

  @post('/pagocabs')
  @response(200, {
    description: 'Pagocab model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pagocab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagocab, {
            title: 'NewPagocab',
            exclude: ['id'],
          }),
        },
      },
    })
    pagocab: Omit<Pagocab, 'id'>,
  ): Promise<Pagocab> {
    return this.pagocabRepository.create(pagocab);
  }

  @get('/pagocabs/count')
  @response(200, {
    description: 'Pagocab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pagocab) where?: Where<Pagocab>,
  ): Promise<Count> {
    return this.pagocabRepository.count(where);
  }

  @get('/pagocabs')
  @response(200, {
    description: 'Array of Pagocab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pagocab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pagocab) filter?: Filter<Pagocab>,
  ): Promise<Pagocab[]> {
    return this.pagocabRepository.find(filter);
  }

  @patch('/pagocabs')
  @response(200, {
    description: 'Pagocab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagocab, {partial: true}),
        },
      },
    })
    pagocab: Pagocab,
    @param.where(Pagocab) where?: Where<Pagocab>,
  ): Promise<Count> {
    return this.pagocabRepository.updateAll(pagocab, where);
  }

  @get('/pagocabs/{id}')
  @response(200, {
    description: 'Pagocab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pagocab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pagocab, {exclude: 'where'}) filter?: FilterExcludingWhere<Pagocab>
  ): Promise<Pagocab> {
    return this.pagocabRepository.findById(id, filter);
  }

  @patch('/pagocabs/{id}')
  @response(204, {
    description: 'Pagocab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagocab, {partial: true}),
        },
      },
    })
    pagocab: Pagocab,
  ): Promise<void> {
    await this.pagocabRepository.updateById(id, pagocab);
  }

  @put('/pagocabs/{id}')
  @response(204, {
    description: 'Pagocab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagocab: Pagocab,
  ): Promise<void> {
    await this.pagocabRepository.replaceById(id, pagocab);
  }

  @del('/pagocabs/{id}')
  @response(204, {
    description: 'Pagocab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagocabRepository.deleteById(id);
  }
}
