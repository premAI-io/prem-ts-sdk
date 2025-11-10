// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PremAI, { toFile } from 'premai';

const client = new PremAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  // Prism tests are disabled
  test.skip('addDatapoint: only required params', async () => {
    const responsePromise = client.datasets.addDatapoint('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'content', role: 'user' }],
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
  test.skip('addDatapoint: required and optional params', async () => {
    const response = await client.datasets.addDatapoint('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'content', role: 'user' }],
      bucket: 'uncategorized',
    });
  });

  // Prism tests are disabled
  test.skip('createFromJSONL: only required params', async () => {
    const responsePromise = client.datasets.createFromJSONL({
      name: 'x',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createFromJSONL: required and optional params', async () => {
    const response = await client.datasets.createFromJSONL({
      name: 'x',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('createSynthetic: only required params', async () => {
    const responsePromise = client.datasets.createSynthetic({
      name: 'x',
      pairs_to_generate: 1,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createSynthetic: required and optional params', async () => {
    const response = await client.datasets.createSynthetic({
      name: 'x',
      pairs_to_generate: 1,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      chunk_size: 1000,
      files: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      pair_type: 'qa',
      question_answer_guidance: 'question_answer_guidance',
      rules_and_constraints: 'rules_and_constraints',
      system_prompt: 'system_prompt',
      temperature: 0,
      user_instructions: 'user_instructions',
      website_urls: ['https://example.com'],
      youtube_urls: ['https://example.com'],
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.datasets.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
