// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';
import {
  Chat,
  ChatCreateCompletionParams,
  ChatCreateCompletionResponse,
  ChatListInternalModelsResponse,
  ChatListModelsResponse,
} from './chat';

export class Internal extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

Internal.Chat = Chat;

export declare namespace Internal {
  export {
    Chat as Chat,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatListInternalModelsResponse as ChatListInternalModelsResponse,
    type ChatListModelsResponse as ChatListModelsResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
