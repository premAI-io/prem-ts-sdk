// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Premai from 'premai';

const client = new Premai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.internal.chat.createCompletion({
      frequency_penalty: -2,
      max_completion_tokens: 1,
      messages: [{ role: 'system' }],
      model: 'model',
      presence_penalty: -2,
      stream: true,
      temperature: 0,
      top_p: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.internal.chat.createCompletion({
      frequency_penalty: -2,
      max_completion_tokens: 1,
      messages: [{ role: 'system', content: null }],
      model: 'model',
      presence_penalty: -2,
      stream: true,
      temperature: 0,
      top_p: 0,
      response_format: { json_schema: { foo: 'bar' }, type: 'text' },
      seed: 0,
      stop: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listInternalModels', async () => {
    const responsePromise = client.internal.chat.listInternalModels();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listModels', async () => {
    const responsePromise = client.internal.chat.listModels();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
