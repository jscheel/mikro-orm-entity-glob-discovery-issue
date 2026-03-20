import { defineEntity, p } from '@mikro-orm/core';

// Notice that this does not export the schema, only the class.
// This matches some of the documentation, but not all of it. My entities works
// in my application code because of the way they are loaded into the NestJS
// project. I assumed that the entity discovery would discover entities from
// the exported class, but it appears that I have to export the schema for it
// to discover them. If I export the schema, it works as expected.
const UserSchema = defineEntity({
  name: 'User',
  properties: {
    id: p.integer().primary(),
    fullName: p.string(),
    email: p.string(),
    password: p.string(),
    bio: p.text().default(''),
  },
});

export class User extends UserSchema.class {}

UserSchema.setClass(User);
