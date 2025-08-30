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
  ],
};
