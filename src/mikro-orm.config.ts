import { ___prod___ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Post],
  dbName: "reddit-project",
  user: "postgres",
  password: "123456",
  debug: !___prod___,
  type: "postgresql",
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
} as Parameters<typeof MikroORM.init>[0];

// export default {
//   entities: [Post],
//   dbName: "reddit-project",
//   user: "postgres",
//   password: "123456",
//   debug: !___prod___,
//   type: "postgresql",
// } as const;
