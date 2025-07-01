// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Create a chat completion (OpenAI compatible).
   */
  completions(body: ChatCompletionsParams, options?: RequestOptions): APIPromise<ChatCompletionsResponse> {
    return this._client.post('/api/v1/chat/completions', { body, ...options });
  }

  /**
   * Get available AI models in OpenAI compatible format.
   */
  models(options?: RequestOptions): APIPromise<ChatModelsResponse> {
    return this._client.get('/api/v1/models', options);
  }
}

export interface ChatCompletionsResponse {
  id: string;

  choices: Array<ChatCompletionsResponse.Choice>;

  created: number;

  model: string;

  object: 'chat.completion';

  system_fingerprint?: string | null;

  usage?: ChatCompletionsResponse.Usage;
}

export namespace ChatCompletionsResponse {
  export interface Choice {
    finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';

    index: number;

    message: Choice.Message;
  }

  export namespace Choice {
    export interface Message {
      content: string | null;

      role: 'assistant';
    }
  }

  export interface Usage {
    completion_tokens: number;

    prompt_tokens: number;

    total_tokens: number;
  }
}

export interface ChatModelsResponse {
  data: Array<ChatModelsResponse.Data>;

  object: 'list';
}

export namespace ChatModelsResponse {
  export interface Data {
    id: string;

    created: number;

    object: 'model';

    owned_by: string;
  }
}

export interface ChatCompletionsParams {
  messages: Array<ChatCompletionsParams.Message>;

  model: string;

  frequency_penalty?: number;

  max_completion_tokens?: number | null;

  presence_penalty?: number;

  response_format?: ChatCompletionsParams.ResponseFormat;

  seed?: number;

  stop?: string | Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?: 'none' | 'auto' | unknown;

  tools?: Array<unknown>;

  top_p?: number | null;
}

export namespace ChatCompletionsParams {
  export interface Message {
    role: 'system' | 'user' | 'assistant';

    content?: null;
  }

  export interface ResponseFormat {
    json_schema: { [key: string]: unknown };

    type: 'text' | 'json_schema';
  }
}

export declare namespace Chat {
  export {
    type ChatCompletionsResponse as ChatCompletionsResponse,
    type ChatModelsResponse as ChatModelsResponse,
    type ChatCompletionsParams as ChatCompletionsParams,
  };
}
