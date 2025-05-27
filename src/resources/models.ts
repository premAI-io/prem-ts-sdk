// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get available AI models in OpenAI compatible format.
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/api/internal/chat/models', options);
  }

  /**
   * Get available AI models in the raw internal format.
   */
  listInternal(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/internal/chat/internalModels', options);
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

export type ModelListInternalResponse = unknown;

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelListInternalResponse as ModelListInternalResponse,
  };
}
