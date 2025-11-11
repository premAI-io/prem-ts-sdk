// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Finetuning extends APIResource {
  /**
   * Create and start fine-tuning job
   */
  create(body: FinetuningCreateParams, options?: RequestOptions): APIPromise<FinetuningCreateResponse> {
    return this._client.post('/api/v1/public/finetuning/create', { body, ...options });
  }

  /**
   * Get fine-tuning job status
   */
  get(jobID: string, options?: RequestOptions): APIPromise<FinetuningGetResponse> {
    return this._client.get(path`/api/v1/public/finetuning/${jobID}`, options);
  }
}

export interface FinetuningCreateResponse {
  job_id: string;
}

export interface FinetuningGetResponse {
  id: string;

  experiments: Array<FinetuningGetResponse.Experiment>;

  name: string;

  snapshot_id: string;

  status: 'processing' | 'completed' | 'failed';
}

export namespace FinetuningGetResponse {
  export interface Experiment {
    id: string;

    base_model_id: string;

    batch_size: number;

    experiment_number: number;

    learning_rate_multiplier: number;

    lora: boolean;

    n_epochs: number;

    status: 'pending' | 'queued' | 'running' | 'deploying' | 'succeeded' | 'failed' | 'deleted';

    model_id?: string;
  }
}

export interface FinetuningCreateParams {
  experiments: Array<FinetuningCreateParams.Experiment>;

  name: string;

  snapshot_id: string;
}

export namespace FinetuningCreateParams {
  export interface Experiment {
    base_model_id: string;

    batch_size: number;

    learning_rate_multiplier: number;

    n_epochs: number;

    lora?: boolean | null;
  }
}

export declare namespace Finetuning {
  export {
    type FinetuningCreateResponse as FinetuningCreateResponse,
    type FinetuningGetResponse as FinetuningGetResponse,
    type FinetuningCreateParams as FinetuningCreateParams,
  };
}
