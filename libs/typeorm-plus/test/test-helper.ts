import { config } from 'dotenv';
import { env } from 'process';
import { ConnectionOptions } from 'typeorm';

try {
  config();
} catch {}

const {
  TYPEORM_PLUS_TEST_DB_TYPE,
  TYPEORM_PLUS_TEST_USERNAME,
  TYPEORM_PLUS_TEST_PASSWORD,
  TYPEORM_PLUS_TEST_DATABASE
} = env;

export const baseOptions: ConnectionOptions = {
  type: (TYPEORM_PLUS_TEST_DB_TYPE as any) || 'postgres',
  username: TYPEORM_PLUS_TEST_USERNAME,
  password: TYPEORM_PLUS_TEST_PASSWORD,
  database: TYPEORM_PLUS_TEST_DATABASE || 'test',
  synchronize: true,
  dropSchema: false
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
