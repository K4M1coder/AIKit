import type { DocConfig } from '../../components/docs/DocLayout';

export const jupyterDoc: DocConfig = {
  id: 'jupyter',
  title: 'Jupyter',
  icon: 'fa-code',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Jupyter provides interactive notebooks for data exploration, prototyping, and demos across the AIKit stack.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:8888" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:8888</a>
              </li>
              <li>Create or open a notebook from the shared folder</li>
              <li>Run cells and visualize results</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
