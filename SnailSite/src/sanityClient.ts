
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "etihti69",
  dataset: "production",
  apiVersion: "2026-10-08",
  useCdn: true,
});