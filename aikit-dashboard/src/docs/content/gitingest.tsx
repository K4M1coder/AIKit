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
              <li>
                Open <a className="btn btn-sm btn-primary" href="http://localhost:3003" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:3003</a>
              </li>
              <li>Enter a Git repository URL or upload local files</li>
              <li>Configure analysis parameters and file filters</li>
              <li>Run the ingestion process and review results</li>
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
                <th>Environment Variable</th>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>GITHUB_TOKEN</code></td>
                <td>your-token</td>
                <td>GitHub API token for private repos</td>
              </tr>
              <tr>
                <td><code>MAX_FILE_SIZE</code></td>
                <td>1MB</td>
                <td>Maximum file size for processing</td>
              </tr>
              <tr>
                <td><code>OUTPUT_FORMAT</code></td>
                <td>markdown</td>
                <td>Output format for processed files</td>
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
                <h5 className="card-title"><i className="fas fa-code"/> Code Analysis</h5>
                <p className="card-text">Analyze code structure, dependencies, and documentation</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-vector-square"/> Vectorization</h5>
                <p className="card-text">Convert code and documentation into vector embeddings</p>
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
          <li className="list-group-item"><i className="fas fa-search"/> Code search and similarity analysis</li>
          <li className="list-group-item"><i className="fas fa-brain"/> AI-powered code understanding</li>
          <li className="list-group-item"><i className="fas fa-book"/> Documentation generation</li>
          <li className="list-group-item"><i className="fas fa-project-diagram"/> Repository structure analysis</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://github.com/dschmura/gitingest" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://github.com/dschmura/gitingest/blob/main/README.md" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Documentation
          </a>
          <a href="http://localhost:3003/api/docs" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-code"/> API Documentation
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
                <h5 className="card-title"><i className="fas fa-vector-square"/> Qdrant</h5>
                <p className="card-text">Vector database for storing and querying code embeddings</p>
                <div className="d-flex gap-2">
                  <a href="/service/qdrant" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-code-branch"/> n8n</h5>
                <p className="card-text">Automate GitIngest workflows and repository processing</p>
                <div className="d-flex gap-2">
                  <a href="/service/n8n" className="btn btn-outline-info">
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
