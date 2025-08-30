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
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://github.com/joaomdmoura/crewAI" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
        </div>
      ),
    },
  ],
};
