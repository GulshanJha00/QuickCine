import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/config/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://quickcine_owner:4WX6jZrKPMtA@ep-proud-cake-a54yatrv.us-east-2.aws.neon.tech/quickcine?sslmode=require",
  }
});