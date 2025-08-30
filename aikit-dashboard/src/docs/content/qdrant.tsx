import type { DocConfig } from '../../components/docs/DocLayout';

export const qdrantDoc: DocConfig = {
  id: 'qdrant',
  title: 'Qdrant',
  icon: 'fa-cubes',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Qdrant is a vector database for embeddings and semantic search. It offers REST and gRPC APIs, filtering, and payload storage.
        </p>
      ),
    },
    {
      id: 'quickstart',
      title: 'Quick Start',
      content: (
        <div className="card bg-light">
          <div className="card-body">
            <ol className="mb-0">
              <li>
                Open <a className="btn btn-sm btn-primary" href="http://localhost:6333" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:6333</a>
              </li>
              <li>Create a collection, upsert vectors with payload</li>
              <li>Query by vector with optional filters</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: 'configuration',
      title: 'Configuration',
      content: (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>QDRANT__SERVICE__HTTP_PORT</code></td>
                <td>6333</td>
                <td>HTTP port</td>
              </tr>
              <tr>
                <td><code>QDRANT__SERVICE__GRPC_PORT</code></td>
                <td>6334</td>
                <td>gRPC port</td>
              </tr>
              <tr>
                <td><code>QDRANT__STORAGE__PATH</code></td>
                <td>/qdrant/storage</td>
                <td>Data storage location</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'features',
      title: 'Features',
      content: (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-vector-square"/> Vector Search</h5>
                <p className="card-text">Semantic search with high performance and accuracy</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-filter"/> Filters</h5>
                <p className="card-text">Rich filtering and payload support for querying</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-project-diagram"/> HNSW/IVF</h5>
                <p className="card-text">Multiple indexing strategies for speed and scale</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-lock"/> Security</h5>
                <p className="card-text">API keys, TLS, and role-based access controls</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'usecases',
      title: 'Common Use Cases',
      content: (
        <ul className="list-group">
          <li className="list-group-item"><i className="fas fa-search"/> Semantic search and Q&A</li>
          <li className="list-group-item"><i className="fas fa-robot"/> RAG pipelines storing embeddings</li>
          <li className="list-group-item"><i className="fas fa-layer-group"/> Multimodal vector search (text, images, etc.)</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://qdrant.tech/documentation/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://github.com/qdrant/qdrant" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
        </div>
      ),
    },
    {
      id: 'related',
      title: 'Related Services',
      content: (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-diagram-project"/> n8n</h5>
                <p className="card-text">Orchestrate ingestion flows pushing vectors to Qdrant</p>
                <div className="d-flex gap-2">
                  <a href="/service/n8n" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-diagram-project"/> Flowise</h5>
                <p className="card-text">Build chatflows that query Qdrant for retrieval</p>
                <div className="d-flex gap-2">
                  <a href="/service/flowise" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
};
