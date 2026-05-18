import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {});
  // Allow embedding in iframe from the document platform
  response.headers.delete('X-Frame-Options');
  response.headers.delete('Content-Security-Policy');
  return response;
};
