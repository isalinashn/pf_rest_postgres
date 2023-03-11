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
import {Tipoidentidad} from '../models';
import {TipoidentidadRepository} from '../repositories';

export class TipoidentidadController {
  constructor(
    @repository(TipoidentidadRepository)
    public tipoidentidadRepository : TipoidentidadRepository,
  ) {}

  @post('/tipoidentidads')
  @response(200, {
    description: 'Tipoidentidad model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipoidentidad)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoidentidad, {
            title: 'NewTipoidentidad',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoidentidad: Omit<Tipoidentidad, 'id'>,
  ): Promise<Tipoidentidad> {
    return this.tipoidentidadRepository.create(tipoidentidad);
  }

  @get('/tipoidentidads/count')
  @response(200, {
    description: 'Tipoidentidad model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipoidentidad) where?: Where<Tipoidentidad>,
  ): Promise<Count> {
    return this.tipoidentidadRepository.count(where);
  }

  @get('/tipoidentidads')
  @response(200, {
    description: 'Array of Tipoidentidad model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipoidentidad, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipoidentidad) filter?: Filter<Tipoidentidad>,
  ): Promise<Tipoidentidad[]> {
    return this.tipoidentidadRepository.find(filter);
  }

  @patch('/tipoidentidads')
  @response(200, {
    description: 'Tipoidentidad PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoidentidad, {partial: true}),
        },
      },
    })
    tipoidentidad: Tipoidentidad,
    @param.where(Tipoidentidad) where?: Where<Tipoidentidad>,
  ): Promise<Count> {
    return this.tipoidentidadRepository.updateAll(tipoidentidad, where);
  }

  @get('/tipoidentidads/{id}')
  @response(200, {
    description: 'Tipoidentidad model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipoidentidad, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tipoidentidad, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipoidentidad>
  ): Promise<Tipoidentidad> {
    return this.tipoidentidadRepository.findById(id, filter);
  }

  @patch('/tipoidentidads/{id}')
  @response(204, {
    description: 'Tipoidentidad PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoidentidad, {partial: true}),
        },
      },
    })
    tipoidentidad: Tipoidentidad,
  ): Promise<void> {
    await this.tipoidentidadRepository.updateById(id, tipoidentidad);
  }

  @put('/tipoidentidads/{id}')
  @response(204, {
    description: 'Tipoidentidad PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoidentidad: Tipoidentidad,
  ): Promise<void> {
    await this.tipoidentidadRepository.replaceById(id, tipoidentidad);
  }

  @del('/tipoidentidads/{id}')
  @response(204, {
    description: 'Tipoidentidad DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoidentidadRepository.deleteById(id);
  }
}
