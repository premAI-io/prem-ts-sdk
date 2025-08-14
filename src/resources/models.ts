// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get available AI models in OpenAI compatible format.
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/api/v1/models', options);
  }

  /**
   * Check if a model is running for inference. Use query param to support IDs with /
   */
  checkStatus(query: ModelCheckStatusParams, options?: RequestOptions): APIPromise<ModelCheckStatusResponse> {
    return this._client.get('/api/v1/models/running', { query, ...options });
  }

  /**
   * Load up a model for inference. This endpoint requests a model to be loaded into
   * memory for faster inference.
   */
  load(body: ModelLoadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/models/up', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Load down a model for inference.
   */
  unload(body: ModelUnloadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/models/down', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ModelListResponse {
  /**
   * An array containing the available models. Each element is a complete model
   * object with all its properties.
   */
  data: Array<ModelListResponse.Data>;

  /**
   * The type of object returned, always "list" for model listing responses. Helps
   * identify this as a collection of models.
   */
  object: 'list';
}

export namespace ModelListResponse {
  export interface Data {
    /**
     * The unique identifier of the model. This can be used to specify the model in API
     * requests. For fine-tuned models, this may include a user-specific prefix.
     */
    id: string;

    /**
     * Unix timestamp (in seconds) when this model was created or made available. For
     * fine-tuned models, this represents when the fine-tuning was completed.
     */
    created: number;

    /**
     * The type of object represented, which is always "model" for model objects. This
     * helps distinguish model objects from other types of responses.
     */
    object: 'model';

    /**
     * Identifies the owner or provider of the model. Can be "premai" for base models,
     * a user ID for fine-tuned models, or other providers like "openai" or
     * "anthropic".
     */
    owned_by: string;
  }
}

export interface ModelCheckStatusResponse {
  /**
   * Whether the model is running.
   */
  status: boolean;
}

export interface ModelCheckStatusParams {
  model: string;
}

export interface ModelLoadParams {
  /**
   * The ID or alias of the model to load up.
   */
  model: string;
}

export interface ModelUnloadParams {
  /**
   * The ID or alias of the model to load down.
   */
  model: string;
}

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelCheckStatusResponse as ModelCheckStatusResponse,
    type ModelCheckStatusParams as ModelCheckStatusParams,
    type ModelLoadParams as ModelLoadParams,
    type ModelUnloadParams as ModelUnloadParams,
  };
}
