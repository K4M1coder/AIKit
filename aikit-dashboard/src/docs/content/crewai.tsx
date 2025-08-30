import type { DocConfig } from '../../components/docs/DocLayout';

export const crewaiDoc: DocConfig = {
  id: 'crewai',
  title: 'CrewAI Studio',
  icon: 'https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66e1e4bddb9f194838194eb2_256x256.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          CrewAI Studio orchestrates teams of AI agents with roles and tools to accomplish complex tasks collaboratively.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:8501" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:8501</a>
              </li>
              <li>Create agents, give them tools, and run tasks</li>
              <li>Connect to n8n and Open WebUI if needed</li>
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
                <td><code>STREAMLIT_PORT</code></td>
                <td>8501</td>
                <td>Port for CrewAI Studio web interface</td>
              </tr>
              <tr>
                <td><code>OPENAI_API_KEY</code></td>
                <td>your-key</td>
                <td>OpenAI API key for agent LLM access</td>
              </tr>
              <tr>
                <td><code>CREWAI_STORAGE_DIR</code></td>
                <td>/app/storage</td>
                <td>Directory for storing crew configurations</td>
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
                <h5 className="card-title"><i className="fas fa-users"/> Multi-Agent Teams</h5>
                <p className="card-text">Create teams of AI agents with specialized roles</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-tasks"/> Task Orchestration</h5>
                <p className="card-text">Define complex workflows and task dependencies</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-comments"/> Agent Collaboration</h5>
                <p className="card-text">Agents can communicate and share information</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-eye"/> Visual Interface</h5>
                <p className="card-text">Streamlit-based interface for easy crew management</p>
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
          <li className="list-group-item"><i className="fas fa-search"/> Research and analysis teams</li>
          <li className="list-group-item"><i className="fas fa-pen"/> Content creation and editorial workflows</li>
          <li className="list-group-item"><i className="fas fa-bug"/> Software development and QA processes</li>
          <li className="list-group-item"><i className="fas fa-chart-line"/> Business intelligence and reporting</li>
          <li className="list-group-item"><i className="fas fa-handshake"/> Customer service automation</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://docs.crewai.com/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://github.com/joaomdmoura/crewAI" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://docs.crewai.com/introduction" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-play"/> Getting Started
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
                <h5 className="card-title"><i className="fas fa-brain"/> Ollama</h5>
                <p className="card-text">Local LLM service that can power CrewAI agents</p>
                <div className="d-flex gap-2">
                  <a href="/service/ollama" className="btn btn-outline-info">
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
                <p className="card-text">Workflow automation that can trigger CrewAI processes</p>
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
                <h5 className="card-title"><i className="fas fa-vector-square"/> Qdrant</h5>
                <p className="card-text">Vector database for agent knowledge and memory storage</p>
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
                <h5 className="card-title"><i className="fas fa-book"/> Jupyter</h5>
                <p className="card-text">Interactive environment for CrewAI development and testing</p>
                <div className="d-flex gap-2">
                  <a href="/service/jupyter" className="btn btn-outline-info">
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
