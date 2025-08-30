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
                <td><code>JUPYTER_ENABLE_LAB</code></td>
                <td>yes</td>
                <td>Enable JupyterLab interface</td>
              </tr>
              <tr>
                <td><code>JUPYTER_PORT</code></td>
                <td>8888</td>
                <td>Port for Jupyter web interface</td>
              </tr>
              <tr>
                <td><code>JUPYTER_TOKEN</code></td>
                <td>jupyter</td>
                <td>Authentication token</td>
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
                <h5 className="card-title"><i className="fas fa-code"/> Interactive Coding</h5>
                <p className="card-text">Execute code cells and see results immediately</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-chart-bar"/> Data Visualization</h5>
                <p className="card-text">Create rich visualizations with matplotlib, plotly, and more</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-layer-group"/> Multiple Kernels</h5>
                <p className="card-text">Support for Python, R, Scala, and other languages</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-share"/> Shareable Notebooks</h5>
                <p className="card-text">Export and share notebooks in various formats</p>
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
          <li className="list-group-item"><i className="fas fa-chart-line"/> Data analysis and exploration</li>
          <li className="list-group-item"><i className="fas fa-robot"/> Machine learning model development</li>
          <li className="list-group-item"><i className="fas fa-chart-bar"/> Data visualization and reporting</li>
          <li className="list-group-item"><i className="fas fa-graduation-cap"/> Educational tutorials and workshops</li>
          <li className="list-group-item"><i className="fas fa-flask"/> Prototyping and experimentation</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://docs.jupyter.org/" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://github.com/jupyter/jupyter" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://jupyter-notebook.readthedocs.io/" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-play"/> Notebook Documentation
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
                <h5 className="card-title"><i className="fas fa-vector-square"/> Qdrant</h5>
                <p className="card-text">Vector database for storing and querying embeddings in notebooks</p>
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
                <h5 className="card-title"><i className="fas fa-brain"/> Ollama</h5>
                <p className="card-text">Local LLM service for AI experiments in Jupyter notebooks</p>
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
                <h5 className="card-title"><i className="fab fa-github"/> GitIngest</h5>
                <p className="card-text">Code analysis tool for repository research in notebooks</p>
                <div className="d-flex gap-2">
                  <a href="/service/gitingest" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-search"/> Elasticsearch</h5>
                <p className="card-text">Search engine for analyzing logs and data in notebooks</p>
                <div className="d-flex gap-2">
                  <a href="/service/elasticsearch" className="btn btn-outline-info">
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
