addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond to endpoint calls.
 * @param {Request} request
 */
async function handleRequest(request){
  return new Response(
    `
    {
      status: 200,
      message: 'Hello from endpoint!'
    }
    `,
    {
      headers: {
        'content-type': 'text/plain'
      }
    }
  );
}
