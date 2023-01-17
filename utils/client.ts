import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'k8k4tc3k',
  dataset: 'production',
  apiVersion: '2023-01-17',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
