# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionsResponse</a></code>

Methods:

- <code title="post /api/v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">completions</a>({ ...params }) -> ChatCompletionsResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListInternalResponse</a></code>

Methods:

- <code title="get /api/internal/chat/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="get /api/internal/chat/internalModels">client.models.<a href="./src/resources/models.ts">listInternal</a>() -> unknown</code>
