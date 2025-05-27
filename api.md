# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatRetrieveInternalModelsResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatRetrieveModelsResponse</a></code>

Methods:

- <code title="post /api/v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>
- <code title="get /api/v1/chat/internalModels">client.chat.<a href="./src/resources/chat.ts">retrieveInternalModels</a>() -> unknown</code>
- <code title="get /api/v1/chat/models">client.chat.<a href="./src/resources/chat.ts">retrieveModels</a>() -> ChatRetrieveModelsResponse</code>

# Internal

## Chat

Types:

- <code><a href="./src/resources/internal/chat.ts">ChatCreateCompletionResponse</a></code>
- <code><a href="./src/resources/internal/chat.ts">ChatListInternalModelsResponse</a></code>
- <code><a href="./src/resources/internal/chat.ts">ChatListModelsResponse</a></code>

Methods:

- <code title="post /api/internal/chat/completions">client.internal.chat.<a href="./src/resources/internal/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>
- <code title="get /api/internal/chat/internalModels">client.internal.chat.<a href="./src/resources/internal/chat.ts">listInternalModels</a>() -> unknown</code>
- <code title="get /api/internal/chat/models">client.internal.chat.<a href="./src/resources/internal/chat.ts">listModels</a>() -> ChatListModelsResponse</code>
