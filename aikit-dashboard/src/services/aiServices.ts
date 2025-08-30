export interface AIService {
  id: string;
  name: string;
  port?: number;
  url?: string;
  description: string;
  docFile: string; // relative to /docs/
}

export const aiServices: AIService[] = [
  {
    id: 'n8n',
    name: 'n8n',
    port: 5678,
    url: 'http://localhost:5678',
    description: 'Workflow automation, 400+ tool integrations, API orchestration system.',
    docFile: 'n8n.html',
  },
  {
    id: 'ollama',
    name: 'Ollama',
    port: 11434,
    url: 'http://localhost:11434',
    description: 'Local LLM execution engine, Multi GPU/CPU support, serve Ollama & OpenAI API.',
    docFile: 'ollama.html', // Ensure this file exists
  },
  {
    id: 'openwebui',
    name: 'Open WebUI',
    port: 3000,
    url: 'http://localhost:3000',
    description: 'RBAC advanced chat interface, Pipes, Function Calling, MCP, Ollama, OpenAI, OpenAPI.',
    docFile: 'openwebui.html',
  },
  {
    id: 'flowise',
    name: 'Flowise',
    port: 3002,
    url: 'http://localhost:3002',
    description: 'Visual LangChain builder, Workflow templates, API endpoint generation.',
    docFile: 'flowise.html',
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    port: 6333,
    url: 'http://localhost:6333',
    description: 'Vector DB & REST API, Embedding storage, retrieval, Fast retrieval, similarity search.',
    docFile: 'qdrant.html',
  },
  {
    id: 'jupyter',
    name: 'Jupyter',
    port: 8888,
    url: 'http://localhost:8888',
    description: 'Interactive notebooks, Data visualization, Code execution env.',
    docFile: 'jupyter.html',
  },
  {
    id: 'gitingest',
    name: 'GitIngest',
    port: 3003,
    url: 'http://localhost:3003',
    description: 'Code analysis & indexing, Repository vectorization, Search API interface.',
    docFile: 'gitingest.html',
  },
  {
    id: 'crewai',
    name: 'CrewAI Studio',
    port: 8501,
    url: 'http://localhost:8501',
    description: 'AI team agents orchestration, Task planning & collaboration, Multi-agent workflows.',
    docFile: 'crewai.html',
  },
  {
    id: 'comfyui',
    name: 'ComfyUI',
    port: 8188,
    url: 'http://localhost:8188',
    description: 'Image and video workflow, Credential management, State persistence.',
    docFile: 'comfyui.html',
  },
  {
    id: 'elasticsearch',
    name: 'ElasticSearch',
    port: 9200,
    url: 'http://localhost:9200',
    description: 'Workflow data storage, Credential management, State persistence.',
    docFile: 'elasticsearch.html', // Ensure this file exists
  },
  {
    id: 'kibana',
    name: 'Kibana',
    port: 5601,
    url: 'http://localhost:5601',
    description: 'Visualization for Elasticsearch, dashboards, and analytics.',
    docFile: 'kibana.html',
  },
  {
    id: 'logstash',
    name: 'Logstash',
    port: 5044,
    url: '',
    description: 'Data processing pipeline for ingesting data into Elasticsearch.',
    docFile: 'logstash.html', // Ensure this file exists
  },
];
