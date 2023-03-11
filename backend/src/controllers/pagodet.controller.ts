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
import {Pagodet} from '../models';
import {PagodetRepository} from '../repositories';

export class PagodetController {
  constructor(
    @repository(PagodetRepository)
    public pagodetRepository : PagodetRepository,
  ) {}

  @post('/pagodets')
  @response(200, {
    description: 'Pagodet model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pagodet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagodet, {
            title: 'NewPagodet',
            exclude: ['id'],
          }),
        },
      },
    })
    pagodet: Omit<Pagodet, 'id'>,
  ): Promise<Pagodet> {
    return this.pagodetRepository.create(pagodet);
  }

  @get('/pagodets/count')
  @response(200, {
    description: 'Pagodet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pagodet) where?: Where<Pagodet>,
  ): Promise<Count> {
    return this.pagodetRepository.count(where);
  }

  @get('/pagodets')
  @response(200, {
    description: 'Array of Pagodet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pagodet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pagodet) filter?: Filter<Pagodet>,
  ): Promise<Pagodet[]> {
    return this.pagodetRepository.find(filter);
  }

  @patch('/pagodets')
  @response(200, {
    description: 'Pagodet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagodet, {partial: true}),
        },
      },
    })
    pagodet: Pagodet,
    @param.where(Pagodet) where?: Where<Pagodet>,
  ): Promise<Count> {
    return this.pagodetRepository.updateAll(pagodet, where);
  }

  @get('/pagodets/{id}')
  @response(200, {
    description: 'Pagodet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pagodet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pagodet, {exclude: 'where'}) filter?: FilterExcludingWhere<Pagodet>
  ): Promise<Pagodet> {
    return this.pagodetRepository.findById(id, filter);
  }

  @patch('/pagodets/{id}')
  @response(204, {
    description: 'Pagodet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagodet, {partial: true}),
        },
      },
    })
    pagodet: Pagodet,
  ): Promise<void> {
    await this.pagodetRepository.updateById(id, pagodet);
  }

  @put('/pagodets/{id}')
  @response(204, {
    description: 'Pagodet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagodet: Pagodet,
  ): Promise<void> {
    await this.pagodetRepository.replaceById(id, pagodet);
  }

  @del('/pagodets/{id}')
  @response(204, {
    description: 'Pagodet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagodetRepository.deleteById(id);
  }
}
