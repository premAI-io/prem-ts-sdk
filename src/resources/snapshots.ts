// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Snapshots extends APIResource {
  /**
   * Create snapshot from dataset with train/validation split
   */
  create(body: SnapshotCreateParams, options?: RequestOptions): APIPromise<SnapshotCreateResponse> {
    return this._client.post('/api/v1/public/snapshots/create', { body, ...options });
  }

  /**
   * Create snapshot from separate training and validation files
   */
  createFromFiles(
    body: SnapshotCreateFromFilesParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotCreateFromFilesResponse> {
    return this._client.post(
      '/api/v1/public/snapshots/create-from-files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface SnapshotCreateResponse {
  snapshot_id: string;
}

export interface SnapshotCreateFromFilesResponse {
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

export interface SnapshotCreateFromFilesParams {
  /**
   * Snapshot name shown in the dashboard once the snapshot is created.
   */
  label: string;

  /**
   * Project ID that will own the generated snapshot. Must match an existing project.
   */
  project_id: string;

  /**
   * Required JSONL training file. Upload line-delimited messages that will form the
   * training split.
   */
  training_file: Uploadable;

  /**
   * Required JSONL validation file. Upload line-delimited messages reserved for
   * validation.
   */
  validation_file: Uploadable;
}

export declare namespace Snapshots {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotCreateFromFilesResponse as SnapshotCreateFromFilesResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotCreateFromFilesParams as SnapshotCreateFromFilesParams,
  };
}
