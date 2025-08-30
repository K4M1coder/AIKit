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
  ],
};
