import type { DocConfig } from '../../components/docs/DocLayout';

export const flowiseDoc: DocConfig = {
  id: 'flowise',
  title: 'Flowise',
  icon: 'fa-diagram-project',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Flowise is a visual builder for LangChain graphs. Design LLM chains and deploy as APIs with a couple of clicks.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:3002" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:3002</a>
              </li>
              <li>Create a new flow and add nodes</li>
              <li>Deploy to an endpoint and test</li>
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
                <td><code>PORT</code></td>
                <td>3002</td>
                <td>Port for Flowise web interface</td>
              </tr>
              <tr>
                <td><code>FLOWISE_USERNAME</code></td>
                <td>admin</td>
                <td>Default username for authentication</td>
              </tr>
              <tr>
                <td><code>FLOWISE_PASSWORD</code></td>
                <td>1234</td>
                <td>Default password for authentication</td>
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
                <h5 className="card-title"><i className="fas fa-project-diagram"/> Visual Builder</h5>
                <p className="card-text">Drag-and-drop interface for creating AI workflows</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-layer-group"/> LangChain Integration</h5>
                <p className="card-text">Built on top of LangChain framework</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-comments"/> Chatflow Templates</h5>
                <p className="card-text">Pre-built templates for common AI use cases</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-plug"/> Multiple Integrations</h5>
                <p className="card-text">Supports various LLMs, vector databases, and tools</p>
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
          <li className="list-group-item"><i className="fas fa-robot"/> Conversational AI chatbots</li>
          <li className="list-group-item"><i className="fas fa-question-circle"/> Question-answering systems</li>
          <li className="list-group-item"><i className="fas fa-search"/> Document retrieval and analysis</li>
          <li className="list-group-item"><i className="fas fa-code"/> Code generation assistants</li>
          <li className="list-group-item"><i className="fas fa-database"/> RAG (Retrieval Augmented Generation) applications</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://flowiseai.com/docs" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://github.com/FlowiseAI/Flowise" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://docs.flowiseai.com/getting-started" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-play"/> Getting Started Guide
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
                <p className="card-text">Local LLM service that can be used as the LLM provider in Flowise</p>
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
                <h5 className="card-title"><i className="fas fa-vector-square"/> Qdrant</h5>
                <p className="card-text">Vector database for storing embeddings in Flowise workflows</p>
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
                <p className="card-text">Workflow automation that can trigger Flowise chatflows via API</p>
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
                <h5 className="card-title"><i className="fas fa-window-maximize"/> Open WebUI</h5>
                <p className="card-text">Alternative chat interface that can complement Flowise chatflows</p>
                <div className="d-flex gap-2">
                  <a href="/service/openwebui" className="btn btn-outline-info">
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
