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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:3000" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:3000</a>
              </li>
              <li>Connect a model provider (Ollama or OpenAI)</li>
              <li>Create a pipe or tool and start a chat</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
