import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const project = "1jvg14bi";
const dataset = "production";
const apiVersion = "2023-10-21";

export const client = createClient({
  projectId: project,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
