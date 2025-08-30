import type { DocConfig } from '../../components/docs/DocLayout';

export const ollamaDoc: DocConfig = {
  id: 'ollama',
  title: 'Ollama',
  icon: 'fa-brain',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Ollama is a lightweight framework for running large language models locally. It exposes an OpenAI-compatible API and supports popular models like Llama 3.
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
                API available at <a className="btn btn-sm btn-primary" href="http://localhost:11434" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:11434</a>
              </li>
              <li>Pull a model: <code>ollama pull llama3.2</code></li>
              <li>Chat via Open WebUI or your own client</li>
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
                <td><code>OLLAMA_HOST</code></td>
                <td>0.0.0.0</td>
                <td>Bind address</td>
              </tr>
              <tr>
                <td><code>OLLAMA_PORT</code></td>
                <td>11434</td>
                <td>API port</td>
              </tr>
              <tr>
                <td><code>OLLAMA_MODELS</code></td>
                <td>~/ollama/models</td>
                <td>Models storage directory</td>
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
                <h5 className="card-title"><i className="fas fa-brain"/> Local LLMs</h5>
                <p className="card-text">Run text generation models offline</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-cubes"/> Models</h5>
                <p className="card-text">Pull and manage models like llama3, mistral, phi, and more</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-network-wired"/> HTTP API</h5>
                <p className="card-text">Generate text, chat, and embeddings via a simple REST API</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-microchip"/> GPU Acceleration</h5>
                <p className="card-text">Leverage hardware acceleration when available</p>
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
          <li className="list-group-item"><i className="fas fa-comments"/> Local chatbots and assistants</li>
          <li className="list-group-item"><i className="fas fa-file-alt"/> Text generation and summarization</li>
          <li className="list-group-item"><i className="fas fa-lock"/> Privacy-focused LLM experimentation</li>
          <li className="list-group-item"><i className="fas fa-plug"/> Integrate with Flowise, n8n, or custom apps</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://ollama.com/library" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Model Library
          </a>
          <a href="https://github.com/ollama/ollama" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://github.com/ollama/ollama/blob/main/docs/api.md" className="btn btn-outline-info" target="_blank" rel="noreferrer">
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
                <h5 className="card-title"><i className="fas fa-diagram-project"/> Flowise</h5>
                <p className="card-text">Build chatflows that call Ollama models</p>
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
                <h5 className="card-title"><i className="fas fa-window-restore"/> OpenWebUI</h5>
                <p className="card-text">Web UI for chatting with local models served by Ollama</p>
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
