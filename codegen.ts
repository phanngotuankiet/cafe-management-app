import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: {
    [process.env.VITE_GRAPHQL_ENDPOINT ?? "http://localhost:8080/v1/graphql"]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET ?? "",
      },
    },
  },
  documents: ["src/**/*.graphql", "src/**/*.gql"],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: "vue",
      },
    },
  },
};

export default config;
