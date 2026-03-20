import { defineConfig } from '@mikro-orm/sqlite';

export default defineConfig({
  dbName: 'sqlite.db',
  entities: ['dist/entities/**/*.entity.js'],
  entitiesTs: ['src/entities/**/*.entity.ts'],
  debug: true,
});
