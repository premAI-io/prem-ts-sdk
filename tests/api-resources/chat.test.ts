// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PremAI from 'premai';

const client = new PremAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // skipped: tests are disabled for the time being
  test.skip('completions: only required params', async () => {
    const responsePromise = client.chat.completions({
      messages: [{ content: 'content', role: 'system' }],
      model: 'model',
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
  test.skip('completions: required and optional params', async () => {
    const response = await client.chat.completions({
      messages: [{ content: 'content', role: 'system' }],
      model: 'model',
      frequency_penalty: -2,
      max_completion_tokens: 1,
      presence_penalty: -2,
      response_format: { json_schema: { foo: 'bar' }, type: 'text' },
      seed: 0,
      stop: 'string',
      stream: true,
      temperature: 0,
      tool_choice: 'none',
      tools: [{}],
      top_p: 0,
    });
  });
});
