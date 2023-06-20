import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";

export const client = createClient({
    apiVersion: "2023-06-04",
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS,
    useCdn: true,
})
