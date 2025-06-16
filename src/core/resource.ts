// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PremAI } from '../client';

export abstract class APIResource {
  protected _client: PremAI;

  constructor(client: PremAI) {
    this._client = client;
  }
}
