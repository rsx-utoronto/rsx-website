import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;

  if (pathname.startsWith('/relay-Peqp')) {
    // Determine target hostname based on static or dynamic ingestion
    const hostname = pathname.startsWith('/relay-Peqp/static/')
      ? 'us-assets.i.posthog.com' // change us to eu for EU Cloud
      : 'us.i.posthog.com';  // change us to eu for EU Cloud

    // Build external URL
    const url = new URL(event.request.url);
    url.protocol = 'https:';
    url.hostname = hostname;
    url.port = '443';
    url.pathname = pathname.replace('/relay-Peqp/', '');

    // Clone and adjust headers
    const headers = new Headers(event.request.headers);
    headers.set("Accept-Encoding", "");
    headers.set('host', hostname);

    // Proxy the request to the external host
    const response = await fetch(url.toString(), {
      method: event.request.method,
      headers,
      body: event.request.body,
      duplex: "half"
    });

    return response;
  }

  const response = await resolve(event);
  return response;
};