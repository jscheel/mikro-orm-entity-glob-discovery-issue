import { MikroORM } from '@mikro-orm/sqlite';
import config from './src/mikro-orm.config.js';

const orm = await MikroORM.init(config);

console.log(orm);
