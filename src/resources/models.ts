// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Get available AI models in OpenAI compatible format.
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/api/v1/models', options);
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

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
