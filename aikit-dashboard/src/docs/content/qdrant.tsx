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
  ],
};
