// No default React import needed with modern JSX transform
import type { DocConfig } from '../../components/docs/DocLayout';

export const n8nDoc: DocConfig = {
  id: 'n8n',
  title: 'n8n',
  icon: 'https://n8n.io/favicon.ico',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          n8n is a workflow automation platform with 400+ integrations and a visual editor for building flows.
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
              <li>Open <a className="btn btn-sm btn-primary" href="http://localhost:5678" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:5678</a></li>
              <li>Import the included workflow and set credentials</li>
              <li>Activate and test the workflow</li>
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
                <th>Variable</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>N8N_PORT</code></td>
                <td>5678</td>
                <td>Port for n8n UI</td>
              </tr>
              <tr>
                <td><code>N8N_HOST</code></td>
                <td>n8n</td>
                <td>Hostname used by other containers</td>
              </tr>
              <tr>
                <td><code>N8N_PROTOCOL</code></td>
                <td>http</td>
                <td>Protocol for external URL</td>
              </tr>
              <tr>
                <td><code>N8N_EDITOR_BASE_URL</code></td>
                <td>http://localhost:5678</td>
                <td>Public editor URL</td>
              </tr>
              <tr>
                <td><code>N8N_ENCRYPTION_KEY</code></td>
                <td>...</td>
                <td>Key to encrypt credentials</td>
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
                <h5 className="card-title"><i className="fas fa-diagram-project"/> Flow Orchestration</h5>
                <p className="card-text">Coordinate AI agents, RAG pipelines, and Slack bots</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-plug"/> Integrations</h5>
                <p className="card-text">Connect to Slack, Google Drive, Postgres, Webhooks, and custom nodes</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-robot"/> Agents</h5>
                <p className="card-text">Build task-specific agents and chain tools</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-file-import"/> Import/Export</h5>
                <p className="card-text">Use JSON exports to share and version workflows</p>
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
          <li className="list-group-item"><i className="fab fa-slack"/> Slack message summarization</li>
          <li className="list-group-item"><i className="fas fa-database"/> Data pipeline orchestration to Qdrant/Elasticsearch</li>
          <li className="list-group-item"><i className="fas fa-clipboard-check"/> Automated reporting and notifications</li>
          <li className="list-group-item"><i className="fas fa-share-alt"/> Webhook-triggered AI agents</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://docs.n8n.io/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://n8n.io/" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-globe"/> n8n Website
          </a>
          <a href="/service/flowise" className="btn btn-outline-secondary">
            <i className="fas fa-file-alt"/> Flowise Internal Docs
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
                <h5 className="card-title"><i className="fas fa-diagram-project"/> Flowise</h5>
                <p className="card-text">Design and deploy chatflows connected to n8n agents</p>
                <div className="d-flex gap-2">
                  <a href="/service/flowise" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fab fa-slack"/> Slack</h5>
                <p className="card-text">Integrate Slack bots and send messages via workflows</p>
                <div className="d-flex gap-2">
                  <a href="https://api.slack.com/" target="_blank" rel="noreferrer" className="btn btn-outline-info">
                    <i className="fas fa-external-link-alt"/> Slack Platform
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
