import {
  Column,
  Connection,
  ConnectionOptions,
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
  Repository
} from 'typeorm';

import { SequelizeRepository, TypeormPlus } from '../../src';
import { baseOptions, sleep } from '../test-helper';

@Entity({ schema: 'schema' })
class SchemaEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}

describe('schema', () => {
  let connection: Connection;
  let typeormPlus: TypeormPlus;

  let entityRepository: Repository<SchemaEntity>;
  let entitySequelizeRepository: SequelizeRepository<SchemaEntity>;

  beforeAll(async () => {
    const options: ConnectionOptions = { ...baseOptions, entities: [SchemaEntity] };
    connection = await createConnection(options);
    entityRepository = connection.getRepository(SchemaEntity);
    typeormPlus = new TypeormPlus(options, connection);
    typeormPlus.init();
    entitySequelizeRepository = typeormPlus.getSequelizeRepository(SchemaEntity);
    await sleep(500);
  });
  afterAll(async () => {
    await connection.close();
  });

  it('should create', async () => {
    const data = await entityRepository.save({ name: 'schema' });
    expect(data).toBeTruthy();
  });
  it('should create', async () => {
    const data = await entitySequelizeRepository.create({ name: 'schema' });
    expect(data).toBeTruthy();
  });
});