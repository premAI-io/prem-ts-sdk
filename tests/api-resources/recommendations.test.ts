// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PremAI from 'premai';

const client = new PremAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recommendations', () => {
  // Prism tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.recommendations.generate({
      snapshot_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.recommendations.generate({
      snapshot_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reasoning: true,
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.recommendations.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.recommendations.get(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { reasoning: 'true' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PremAI.NotFoundError);
  });
});
