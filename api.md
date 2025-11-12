# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionsResponse</a></code>

Methods:

- <code title="post /api/v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">completions</a>({ ...params }) -> ChatCompletionsResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelCheckStatusResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelLoadResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelUnloadResponse</a></code>

Methods:

- <code title="get /api/v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="get /api/v1/models/running">client.models.<a href="./src/resources/models.ts">checkStatus</a>({ ...params }) -> ModelCheckStatusResponse</code>
- <code title="post /api/v1/models/up">client.models.<a href="./src/resources/models.ts">load</a>({ ...params }) -> ModelLoadResponse</code>
- <code title="post /api/v1/models/down">client.models.<a href="./src/resources/models.ts">unload</a>({ ...params }) -> ModelUnloadResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectGetTreeResponse</a></code>

Methods:

- <code title="post /api/v1/public/projects/create">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /api/v1/public/projects">client.projects.<a href="./src/resources/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="get /api/v1/public/projects/{projectId}">client.projects.<a href="./src/resources/projects.ts">getTree</a>(projectID) -> ProjectGetTreeResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">DatasetAddDatapointResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetCreateFromJSONLResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetCreateSyntheticResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="post /api/v1/datasets/{datasetId}/addDatapoint">client.datasets.<a href="./src/resources/datasets.ts">addDatapoint</a>(datasetID, { ...params }) -> DatasetAddDatapointResponse</code>
- <code title="post /api/v1/public/datasets/create-from-jsonl">client.datasets.<a href="./src/resources/datasets.ts">createFromJSONL</a>({ ...params }) -> DatasetCreateFromJSONLResponse</code>
- <code title="post /api/v1/public/datasets/create-synthetic">client.datasets.<a href="./src/resources/datasets.ts">createSynthetic</a>({ ...params }) -> DatasetCreateSyntheticResponse</code>
- <code title="get /api/v1/public/datasets/{datasetId}">client.datasets.<a href="./src/resources/datasets.ts">get</a>(datasetID) -> DatasetGetResponse</code>

# Snapshots

Types:

- <code><a href="./src/resources/snapshots.ts">SnapshotCreateResponse</a></code>

Methods:

- <code title="post /api/v1/public/snapshots/create">client.snapshots.<a href="./src/resources/snapshots.ts">create</a>({ ...params }) -> SnapshotCreateResponse</code>

# Recommendations

Types:

- <code><a href="./src/resources/recommendations.ts">RecommendationGenerateResponse</a></code>
- <code><a href="./src/resources/recommendations.ts">RecommendationGetResponse</a></code>

Methods:

- <code title="post /api/v1/public/recommendations/generate">client.recommendations.<a href="./src/resources/recommendations.ts">generate</a>({ ...params }) -> RecommendationGenerateResponse</code>
- <code title="get /api/v1/public/recommendations/{snapshotId}">client.recommendations.<a href="./src/resources/recommendations.ts">get</a>(snapshotID) -> RecommendationGetResponse</code>

# Finetuning

Types:

- <code><a href="./src/resources/finetuning.ts">FinetuningCreateResponse</a></code>
- <code><a href="./src/resources/finetuning.ts">FinetuningGetResponse</a></code>

Methods:

- <code title="post /api/v1/public/finetuning/create">client.finetuning.<a href="./src/resources/finetuning.ts">create</a>({ ...params }) -> FinetuningCreateResponse</code>
- <code title="get /api/v1/public/finetuning/{jobId}">client.finetuning.<a href="./src/resources/finetuning.ts">get</a>(jobID) -> FinetuningGetResponse</code>
