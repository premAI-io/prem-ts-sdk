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
  get(
    snapshotID: string,
    query: RecommendationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecommendationGetResponse> {
    return this._client.get(path`/api/v1/public/recommendations/${snapshotID}`, { query, ...options });
  }
}

export interface RecommendationGenerateResponse {
  snapshot_id: string;
}

export interface RecommendationGetResponse {
  recommended_models: Array<RecommendationGetResponse.RecommendedModel> | null;

  snapshot_id: string;

  status: 'processing' | 'completed' | 'failed';
}

export namespace RecommendationGetResponse {
  export interface RecommendedModel {
    baseModelId: string;

    full_hyperparameters: RecommendedModel.FullHyperparameters;

    lora_hyperparameters: RecommendedModel.LoraHyperparameters;

    reasonForRecommendation: string | null;

    recommended: boolean;
  }

  export namespace RecommendedModel {
    export interface FullHyperparameters {
      batchSize: number;

      learningRateMultiplier: number;

      nEpochs: number;
    }

    export interface LoraHyperparameters {
      batchSize: number;

      learningRateMultiplier: number;

      nEpochs: number;
    }
  }
}

export interface RecommendationGenerateParams {
  snapshot_id: string;

  /**
   * false for standard models, true for reasoning models
   */
  reasoning?: boolean | null;
}

export interface RecommendationGetParams {
  reasoning?: 'true' | 'false';
}

export declare namespace Recommendations {
  export {
    type RecommendationGenerateResponse as RecommendationGenerateResponse,
    type RecommendationGetResponse as RecommendationGetResponse,
    type RecommendationGenerateParams as RecommendationGenerateParams,
    type RecommendationGetParams as RecommendationGetParams,
  };
}
