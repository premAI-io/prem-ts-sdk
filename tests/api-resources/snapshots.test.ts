// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PremAI from 'premai';

const client = new PremAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snapshots', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.snapshots.create({ dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.snapshots.create({
      dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      split_percentage: 1,
    });
  });
});
