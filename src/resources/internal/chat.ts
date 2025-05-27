// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Chat extends APIResource {
  /**
   * Create a chat completion (OpenAI compatible).
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/api/internal/chat/completions', { body, ...options });
  }

  /**
   * Get available AI models in the raw internal format.
   */
  listInternalModels(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/internal/chat/internalModels', options);
  }

  /**
   * Get available AI models in OpenAI compatible format.
   */
  listModels(options?: RequestOptions): APIPromise<ChatListModelsResponse> {
    return this._client.get('/api/internal/chat/models', options);
  }
}

export interface ChatCreateCompletionResponse {
  id: string;

  choices: Array<ChatCreateCompletionResponse.Choice>;

  created: number;

  model: string;

  object: 'chat.completion';

  system_fingerprint?: string | null;

  usage?: ChatCreateCompletionResponse.Usage;
}

export namespace ChatCreateCompletionResponse {
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

export type ChatListInternalModelsResponse = unknown;

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

export interface ChatCreateCompletionParams {
  frequency_penalty: number;

  max_completion_tokens: number | null;

  messages: Array<ChatCreateCompletionParams.Message>;

  model: string;

  presence_penalty: number;

  stream: boolean;

  temperature: number | null;

  top_p: number | null;

  response_format?: ChatCreateCompletionParams.ResponseFormat;

  seed?: number;

  stop?: string | Array<string>;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    role: 'system' | 'user' | 'assistant' | 'tool';

    content?: null;
  }

  export interface ResponseFormat {
    json_schema: Record<string, unknown>;

    type: 'text' | 'json_schema';
  }
}

export declare namespace Chat {
  export {
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatListInternalModelsResponse as ChatListInternalModelsResponse,
    type ChatListModelsResponse as ChatListModelsResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
