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
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://ollama.com" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Site
          </a>
          <a href="https://github.com/ollama/ollama" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
        </div>
      ),
    },
  ],
};
