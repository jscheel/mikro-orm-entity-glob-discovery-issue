# Entity Discovery Issue

File globbing does not seem to pick up entity schemas from `defineEntity` classes unless the actual schema itself is exported. It does not appear to detect the schema automatically from the class. See [src/entities/user.entity.ts](src/entities/user.entity.ts) for more information.

The `UserSchema` is not exported. If you run right now, it will fail with the following error:

```
[info] MikroORM version: 7.0.3
[discovery] ORM entity discovery started
(node:77271) ExperimentalWarning: globSync is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file://***/mikro-entity-issue/node_modules/.pnpm/@mikro-orm+core@7.0.3/node_modules/@mikro-orm/core/errors.js:232
    return new MetadataError('No entities were discovered');
```

Once you export `UserSchema`, the same run results in:

```
[info] MikroORM version: 7.0.3
[discovery] ORM entity discovery started
(node:76938) ExperimentalWarning: globSync is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[discovery] - processing entity User
[discovery] - entity discovery finished, found 1 entities, took 36 ms
SqliteMikroORM {
  em: [EntityManager<1>],
  driver: SqliteDriver {
    config: Configuration {},
    dependencies: [ 'kysely', 'better-sqlite3' ],
    connection: SqliteConnection {
      config: Configuration {},
      type: 'write',
      metadata: MetadataStorage {},
      platform: [SqlitePlatform],
      options: [Object],
      logger: [DefaultLogger],
      connected: false,
      database: undefined
    },
    replicas: [],
    platform: [SqlitePlatform],
    comparator: EntityComparator {},
    metadata: MetadataStorage {},
    [Symbol(EntityManagerType)]: undefined
  },
  config: Configuration {}
}
```

Directly passing the class works as well:

```
import { defineConfig } from '@mikro-orm/sqlite';
import { User } from './entities/user.entity.js';

export default defineConfig({
  dbName: 'sqlite.db',
  entities: [User],
  debug: true,
});
```

To test:

```
pnpm install
pnpm start
```
