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
  listModels(options?: RequestOptions): APIPromise<ChatListModelsResponse> {
    return this._client.get('/api/internal/chat/models', options);
  }

  /**
   * Get available AI models in the raw internal format.
   */
  listModelsInternal(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/internal/chat/internalModels', options);
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

export interface ChatListModelsResponse {
  data: Array<ChatListModelsResponse.Data>;

  object: 'list';
}

export namespace ChatListModelsResponse {
  export interface Data {
    id: string;

    created: number;

    object: 'model';

    owned_by: string;
  }
}

export type ChatListModelsInternalResponse = unknown;

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

  top_p?: number | null;
}

export namespace ChatCompletionsParams {
  export interface Message {
    role: 'system' | 'user' | 'assistant';

    content?: null;
  }

  export interface ResponseFormat {
    json_schema: Record<string, unknown>;

    type: 'text' | 'json_schema';
  }
}

export declare namespace Chat {
  export {
    type ChatCompletionsResponse as ChatCompletionsResponse,
    type ChatListModelsResponse as ChatListModelsResponse,
    type ChatListModelsInternalResponse as ChatListModelsInternalResponse,
    type ChatCompletionsParams as ChatCompletionsParams,
  };
}
