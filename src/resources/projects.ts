// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/api/v1/public/projects/create', { body, ...options });
  }

  /**
   * List all projects for the authenticated user
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/api/v1/public/projects', options);
  }

  /**
   * Get complete project tree with datasets, snapshots, and finetuning jobs
   */
  getTree(projectID: string, options?: RequestOptions): APIPromise<ProjectGetTreeResponse> {
    return this._client.get(path`/api/v1/public/projects/${projectID}`, options);
  }
}

export interface ProjectCreateResponse {
  project_id: string;
}

export interface ProjectListResponse {
  projects: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    id: string;

    created_at: string;

    name: string;
  }
}

export interface ProjectGetTreeResponse {
  project: ProjectGetTreeResponse.Project;
}

export namespace ProjectGetTreeResponse {
  export interface Project {
    id: string;

    type: 'project' | 'dataset' | 'snapshot' | 'finetuning-job' | 'experiment';

    children?: Array<unknown>;

    label?: string;

    metadata?: unknown;

    name?: string;

    status?:
      | 'processing'
      | 'completed'
      | 'failed'
      | 'pending'
      | 'queued'
      | 'running'
      | 'deploying'
      | 'succeeded'
      | 'deleted';
  }
}

export interface ProjectCreateParams {
  /**
   * The goal or purpose of this project
   */
  goal: string;

  name: string;
}

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectGetTreeResponse as ProjectGetTreeResponse,
    type ProjectCreateParams as ProjectCreateParams,
  };
}
