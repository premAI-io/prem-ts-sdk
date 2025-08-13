# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionsResponse</a></code>

Methods:

- <code title="post /api/v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">completions</a>({ ...params }) -> ChatCompletionsResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelCheckStatusResponse</a></code>

Methods:

- <code title="get /api/v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="get /api/v1/models/running">client.models.<a href="./src/resources/models.ts">checkStatus</a>({ ...params }) -> ModelCheckStatusResponse</code>
- <code title="post /api/v1/models/up">client.models.<a href="./src/resources/models.ts">load</a>({ ...params }) -> void</code>
- <code title="post /api/v1/models/down">client.models.<a href="./src/resources/models.ts">unload</a>({ ...params }) -> void</code>
