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
import {Tipoempresa} from '../models';
import {TipoempresaRepository} from '../repositories';

export class TipoempresaController {
  constructor(
    @repository(TipoempresaRepository)
    public tipoempresaRepository : TipoempresaRepository,
  ) {}

  @post('/tipoempresas')
  @response(200, {
    description: 'Tipoempresa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipoempresa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoempresa, {
            title: 'NewTipoempresa',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoempresa: Omit<Tipoempresa, 'id'>,
  ): Promise<Tipoempresa> {
    return this.tipoempresaRepository.create(tipoempresa);
  }

  @get('/tipoempresas/count')
  @response(200, {
    description: 'Tipoempresa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipoempresa) where?: Where<Tipoempresa>,
  ): Promise<Count> {
    return this.tipoempresaRepository.count(where);
  }

  @get('/tipoempresas')
  @response(200, {
    description: 'Array of Tipoempresa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipoempresa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipoempresa) filter?: Filter<Tipoempresa>,
  ): Promise<Tipoempresa[]> {
    return this.tipoempresaRepository.find(filter);
  }

  @patch('/tipoempresas')
  @response(200, {
    description: 'Tipoempresa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoempresa, {partial: true}),
        },
      },
    })
    tipoempresa: Tipoempresa,
    @param.where(Tipoempresa) where?: Where<Tipoempresa>,
  ): Promise<Count> {
    return this.tipoempresaRepository.updateAll(tipoempresa, where);
  }

  @get('/tipoempresas/{id}')
  @response(200, {
    description: 'Tipoempresa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipoempresa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tipoempresa, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipoempresa>
  ): Promise<Tipoempresa> {
    return this.tipoempresaRepository.findById(id, filter);
  }

  @patch('/tipoempresas/{id}')
  @response(204, {
    description: 'Tipoempresa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoempresa, {partial: true}),
        },
      },
    })
    tipoempresa: Tipoempresa,
  ): Promise<void> {
    await this.tipoempresaRepository.updateById(id, tipoempresa);
  }

  @put('/tipoempresas/{id}')
  @response(204, {
    description: 'Tipoempresa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoempresa: Tipoempresa,
  ): Promise<void> {
    await this.tipoempresaRepository.replaceById(id, tipoempresa);
  }

  @del('/tipoempresas/{id}')
  @response(204, {
    description: 'Tipoempresa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoempresaRepository.deleteById(id);
  }
}
