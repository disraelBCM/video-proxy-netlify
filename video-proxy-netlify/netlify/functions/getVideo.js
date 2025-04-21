export async function handler(event, context) {
  const { id, site } = event.queryStringParameters;
  const url = `https://tableaureportfunctions.azurewebsites.net/api/PlaylistManifestRequest?code=YOUR-REAL-CODE&id=${id}&site=${site}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    return {
      statusCode: 200,
      body: data,
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}

