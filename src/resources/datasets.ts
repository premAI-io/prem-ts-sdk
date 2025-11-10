// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * Add a single datapoint to a dataset.
   */
  addDatapoint(
    datasetID: string,
    body: DatasetAddDatapointParams,
    options?: RequestOptions,
  ): APIPromise<DatasetAddDatapointResponse> {
    return this._client.post(path`/api/v1/datasets/${datasetID}/addDatapoint`, { body, ...options });
  }

  /**
   * Create dataset from JSONL file
   */
  createFromJSONL(
    body: DatasetCreateFromJSONLParams,
    options?: RequestOptions,
  ): APIPromise<DatasetCreateFromJSONLResponse> {
    return this._client.post(
      '/api/v1/public/datasets/create-from-jsonl',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Create synthetic dataset
   */
  createSynthetic(
    body: DatasetCreateSyntheticParams,
    options?: RequestOptions,
  ): APIPromise<DatasetCreateSyntheticResponse> {
    return this._client.post(
      '/api/v1/public/datasets/create-synthetic',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get dataset status
   */
  get(datasetID: string, options?: RequestOptions): APIPromise<DatasetGetResponse> {
    return this._client.get(path`/api/v1/public/datasets/${datasetID}`, options);
  }
}

export interface DatasetAddDatapointResponse {
  id: string;

  message: string;
}

export interface DatasetCreateFromJSONLResponse {
  dataset_id: string;
}

export interface DatasetCreateSyntheticResponse {
  dataset_id: string;
}

export interface DatasetGetResponse {
  id: string;

  created_at: string;

  datapoints_count: number;

  name: string;

  project_id: string | null;

  status: 'processing' | 'completed' | 'failed';

  updated_at: string;
}

export interface DatasetAddDatapointParams {
  messages: Array<DatasetAddDatapointParams.Message>;

  bucket?: 'uncategorized' | 'training' | 'validation';
}

export namespace DatasetAddDatapointParams {
  export interface Message {
    content: string;

    role: 'user' | 'assistant' | 'system';
  }
}

export interface DatasetCreateFromJSONLParams {
  name: string;

  project_id: string;

  /**
   * JSONL file
   */
  file?: Uploadable;
}

export interface DatasetCreateSyntheticParams {
  name: string;

  pairs_to_generate: number;

  project_id: string;

  /**
   * Text chunk size for processing
   */
  chunk_size?: number;

  /**
   * Optional: PDF, DOCX, etc.
   */
  files?: Array<Uploadable>;

  /**
   * Type of pairs to generate
   */
  pair_type?: 'qa' | 'cot' | 'summary';

  /**
   * Focus on...
   */
  question_answer_guidance?: string;

  /**
   * Avoid...
   */
  rules_and_constraints?: string;

  /**
   * You are a helpful assistant...
   */
  system_prompt?: string;

  /**
   * 0.0-1.0, controls randomness
   */
  temperature?: number | null;

  /**
   * Generate Q&A pairs about...
   */
  user_instructions?: string;

  /**
   * Website URLs as array
   */
  website_urls?: Array<string>;

  /**
   * YouTube URLs as array
   */
  youtube_urls?: Array<string>;
}

export declare namespace Datasets {
  export {
    type DatasetAddDatapointResponse as DatasetAddDatapointResponse,
    type DatasetCreateFromJSONLResponse as DatasetCreateFromJSONLResponse,
    type DatasetCreateSyntheticResponse as DatasetCreateSyntheticResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetAddDatapointParams as DatasetAddDatapointParams,
    type DatasetCreateFromJSONLParams as DatasetCreateFromJSONLParams,
    type DatasetCreateSyntheticParams as DatasetCreateSyntheticParams,
  };
}
