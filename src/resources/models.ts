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
  data: Array<ModelListResponse.Data>;

  object: 'list';
}

export namespace ModelListResponse {
  export interface Data {
    id: string;

    created: number;

    object: 'model';

    owned_by: string;
  }
}

export interface ModelCheckStatusResponse {
  status: boolean;
}

export interface ModelCheckStatusParams {
  model: string;
}

export interface ModelLoadParams {
  model: string;
}

export interface ModelUnloadParams {
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
