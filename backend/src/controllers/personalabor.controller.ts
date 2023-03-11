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
import {Personalabor} from '../models';
import {PersonalaborRepository} from '../repositories';

export class PersonalaborController {
  constructor(
    @repository(PersonalaborRepository)
    public personalaborRepository : PersonalaborRepository,
  ) {}

  @post('/personalabors')
  @response(200, {
    description: 'Personalabor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personalabor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personalabor, {
            title: 'NewPersonalabor',
            exclude: ['id'],
          }),
        },
      },
    })
    personalabor: Omit<Personalabor, 'id'>,
  ): Promise<Personalabor> {
    return this.personalaborRepository.create(personalabor);
  }

  @get('/personalabors/count')
  @response(200, {
    description: 'Personalabor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personalabor) where?: Where<Personalabor>,
  ): Promise<Count> {
    return this.personalaborRepository.count(where);
  }

  @get('/personalabors')
  @response(200, {
    description: 'Array of Personalabor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personalabor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personalabor) filter?: Filter<Personalabor>,
  ): Promise<Personalabor[]> {
    return this.personalaborRepository.find(filter);
  }

  @patch('/personalabors')
  @response(200, {
    description: 'Personalabor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personalabor, {partial: true}),
        },
      },
    })
    personalabor: Personalabor,
    @param.where(Personalabor) where?: Where<Personalabor>,
  ): Promise<Count> {
    return this.personalaborRepository.updateAll(personalabor, where);
  }

  @get('/personalabors/{id}')
  @response(200, {
    description: 'Personalabor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personalabor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personalabor, {exclude: 'where'}) filter?: FilterExcludingWhere<Personalabor>
  ): Promise<Personalabor> {
    return this.personalaborRepository.findById(id, filter);
  }

  @patch('/personalabors/{id}')
  @response(204, {
    description: 'Personalabor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personalabor, {partial: true}),
        },
      },
    })
    personalabor: Personalabor,
  ): Promise<void> {
    await this.personalaborRepository.updateById(id, personalabor);
  }

  @put('/personalabors/{id}')
  @response(204, {
    description: 'Personalabor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personalabor: Personalabor,
  ): Promise<void> {
    await this.personalaborRepository.replaceById(id, personalabor);
  }

  @del('/personalabors/{id}')
  @response(204, {
    description: 'Personalabor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personalaborRepository.deleteById(id);
  }
}
