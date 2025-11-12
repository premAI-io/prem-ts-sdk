// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Snapshots extends APIResource {
  /**
   * Create snapshot from dataset with train/validation split
   */
  create(body: SnapshotCreateParams, options?: RequestOptions): APIPromise<SnapshotCreateResponse> {
    return this._client.post('/api/v1/public/snapshots/create', { body, ...options });
  }
}

export interface SnapshotCreateResponse {
  snapshot_id: string;
}

export interface SnapshotCreateParams {
  /**
   * Dataset ID to snapshot. The dataset must belong to the authenticated workspace.
   */
  dataset_id: string;

  /**
   * Percentage of datapoints to assign to training. Remaining datapoints go to
   * validation.
   */
  split_percentage?: number;
}

export declare namespace Snapshots {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
  };
}
