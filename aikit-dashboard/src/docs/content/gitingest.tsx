import type { DocConfig } from '../../components/docs/DocLayout';

export const gitingestDoc: DocConfig = {
  id: 'gitingest',
  title: 'GitIngest',
  icon: 'fa-code-branch',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          GitIngest analyzes repositories and indexes code for search and RAG. It exposes APIs for querying and ingestion.
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
              <li>Point to a Git repo URL</li>
              <li>Ingest and build embeddings</li>
              <li>Query and integrate with your apps</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
