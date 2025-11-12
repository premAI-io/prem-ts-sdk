// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Recommendations extends APIResource {
  /**
   * Generate model recommendations for a snapshot
   */
  generate(
    body: RecommendationGenerateParams,
    options?: RequestOptions,
  ): APIPromise<RecommendationGenerateResponse> {
    return this._client.post('/api/v1/public/recommendations/generate', { body, ...options });
  }

  /**
   * Get recommendations status for a snapshot
   */
  get(snapshotID: string, options?: RequestOptions): APIPromise<RecommendationGetResponse> {
    return this._client.get(path`/api/v1/public/recommendations/${snapshotID}`, options);
  }
}

export interface RecommendationGenerateResponse {
  snapshot_id: string;
}

export interface RecommendationGetResponse {
  recommended_experiments: Array<RecommendationGetResponse.RecommendedExperiment> | null;

  recommended_models: Array<RecommendationGetResponse.RecommendedModel> | null;

  snapshot_id: string;

  status: 'processing' | 'completed' | 'failed';
}

export namespace RecommendationGetResponse {
  export interface RecommendedExperiment {
    base_model_id: string;

    batch_size: number;

    learning_rate_multiplier: number;

    lora: boolean;

    n_epochs: number;

    reason_for_recommendation: string | null;

    recommended: boolean;
  }

  export interface RecommendedModel {
    base_model_id: string;

    full_hyperparameters: RecommendedModel.FullHyperparameters | null;

    lora_hyperparameters: RecommendedModel.LoraHyperparameters | null;

    reason_for_recommendation: string | null;

    recommended: boolean;
  }

  export namespace RecommendedModel {
    export interface FullHyperparameters {
      batch_size: number;

      learning_rate_multiplier: number;

      n_epochs: number;
    }

    export interface LoraHyperparameters {
      batch_size: number;

      learning_rate_multiplier: number;

      n_epochs: number;
    }
  }
}

export interface RecommendationGenerateParams {
  snapshot_id: string;
}

export declare namespace Recommendations {
  export {
    type RecommendationGenerateResponse as RecommendationGenerateResponse,
    type RecommendationGetResponse as RecommendationGetResponse,
    type RecommendationGenerateParams as RecommendationGenerateParams,
  };
}
