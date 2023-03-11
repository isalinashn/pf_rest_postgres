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
import {Tipodocumento} from '../models';
import {TipodocumentoRepository} from '../repositories';

export class TipodocumentoController {
  constructor(
    @repository(TipodocumentoRepository)
    public tipodocumentoRepository : TipodocumentoRepository,
  ) {}

  @post('/tipodocumentos')
  @response(200, {
    description: 'Tipodocumento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipodocumento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipodocumento, {
            title: 'NewTipodocumento',
            exclude: ['id'],
          }),
        },
      },
    })
    tipodocumento: Omit<Tipodocumento, 'id'>,
  ): Promise<Tipodocumento> {
    return this.tipodocumentoRepository.create(tipodocumento);
  }

  @get('/tipodocumentos/count')
  @response(200, {
    description: 'Tipodocumento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipodocumento) where?: Where<Tipodocumento>,
  ): Promise<Count> {
    return this.tipodocumentoRepository.count(where);
  }

  @get('/tipodocumentos')
  @response(200, {
    description: 'Array of Tipodocumento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipodocumento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipodocumento) filter?: Filter<Tipodocumento>,
  ): Promise<Tipodocumento[]> {
    return this.tipodocumentoRepository.find(filter);
  }

  @patch('/tipodocumentos')
  @response(200, {
    description: 'Tipodocumento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipodocumento, {partial: true}),
        },
      },
    })
    tipodocumento: Tipodocumento,
    @param.where(Tipodocumento) where?: Where<Tipodocumento>,
  ): Promise<Count> {
    return this.tipodocumentoRepository.updateAll(tipodocumento, where);
  }

  @get('/tipodocumentos/{id}')
  @response(200, {
    description: 'Tipodocumento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipodocumento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tipodocumento, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipodocumento>
  ): Promise<Tipodocumento> {
    return this.tipodocumentoRepository.findById(id, filter);
  }

  @patch('/tipodocumentos/{id}')
  @response(204, {
    description: 'Tipodocumento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipodocumento, {partial: true}),
        },
      },
    })
    tipodocumento: Tipodocumento,
  ): Promise<void> {
    await this.tipodocumentoRepository.updateById(id, tipodocumento);
  }

  @put('/tipodocumentos/{id}')
  @response(204, {
    description: 'Tipodocumento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipodocumento: Tipodocumento,
  ): Promise<void> {
    await this.tipodocumentoRepository.replaceById(id, tipodocumento);
  }

  @del('/tipodocumentos/{id}')
  @response(204, {
    description: 'Tipodocumento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipodocumentoRepository.deleteById(id);
  }
}
