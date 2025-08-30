import type { DocConfig } from '../../components/docs/DocLayout';

export const openwebuiDoc: DocConfig = {
  id: 'openwebui',
  title: 'Open WebUI',
  icon: 'fa-comments',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Open WebUI is a modern chat interface with RBAC, tools, and model backends like Ollama and OpenAI. It supports function calling and extensions.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:8080" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:8080</a>
              </li>
              <li>Connect a model provider (Ollama or OpenAI)</li>
              <li>Create a pipe or tool and start a chat</li>
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
                <td><code>OPENWEBUI_PORT</code></td>
                <td>8080</td>
                <td>Web UI port</td>
              </tr>
              <tr>
                <td><code>OLLAMA_API_BASE</code></td>
                <td>http://ollama:11434</td>
                <td>Backend API base URL</td>
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
                <h5 className="card-title"><i className="fas fa-comments"/> Chat UI</h5>
                <p className="card-text">Simple interface to chat with local models</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-list"/> History</h5>
                <p className="card-text">Maintain conversation history across sessions</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-sliders-h"/> Controls</h5>
                <p className="card-text">Adjust temperature, context window, and more</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-gear"/> Integrations</h5>
                <p className="card-text">Works with Ollama and other local model providers</p>
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
          <li className="list-group-item"><i className="fas fa-user"/> Personal assistants</li>
          <li className="list-group-item"><i className="fas fa-book"/> Study aids and note tools</li>
          <li className="list-group-item"><i className="fas fa-flask"/> Prompt experiments and demos</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://github.com/open-webui/open-webui" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://openwebui.com/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-globe"/> Project Site
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
                <p className="card-text">Local LLM backend powering OpenWebUI</p>
                <div className="d-flex gap-2">
                  <a href="/service/ollama" className="btn btn-outline-info">
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
