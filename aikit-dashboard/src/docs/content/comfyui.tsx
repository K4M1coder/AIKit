import type { DocConfig } from '../../components/docs/DocLayout';

export const comfyuiDoc: DocConfig = {
  id: 'comfyui',
  title: 'ComfyUI',
  icon: 'fa-image',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          ComfyUI is a node-based interface for Stable Diffusion workflows, enabling complex image generation pipelines.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:8188" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:8188</a>
              </li>
              <li>Load a model checkpoint</li>
              <li>Create a node graph and run the prompt queue</li>
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
                <td><code>COMFYUI_PORT</code></td>
                <td>8188</td>
                <td>Web interface port</td>
              </tr>
              <tr>
                <td><code>COMFYUI_LISTEN</code></td>
                <td>0.0.0.0</td>
                <td>Listen address for external access</td>
              </tr>
              <tr>
                <td><code>CUDA_VISIBLE_DEVICES</code></td>
                <td>0</td>
                <td>GPU device selection</td>
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
                <h5 className="card-title"><i className="fas fa-project-diagram"/> Node-Based Interface</h5>
                <p className="card-text">Visual workflow creation with connected nodes</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-magic"/> Advanced Workflows</h5>
                <p className="card-text">Complex image generation and manipulation pipelines</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-bolt"/> GPU Accelerated</h5>
                <p className="card-text">Optimized for CUDA and high-performance generation</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-puzzle-piece"/> Extensible</h5>
                <p className="card-text">Custom nodes and extensions support</p>
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
          <li className="list-group-item"><i className="fas fa-palette"/> AI-powered image generation</li>
          <li className="list-group-item"><i className="fas fa-edit"/> Image-to-image transformation</li>
          <li className="list-group-item"><i className="fas fa-mask"/> Inpainting and outpainting</li>
          <li className="list-group-item"><i className="fas fa-video"/> Animation and video generation</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://github.com/comfyanonymous/ComfyUI" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Documentation
          </a>
          <a href="https://github.com/comfyanonymous/ComfyUI" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://comfyworkflows.com/" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-cloud"/> Community Workflows
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
                <p className="card-text">Local LLM service for text-to-image prompting assistance</p>
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
                <h5 className="card-title"><i className="fas fa-code-branch"/> n8n</h5>
                <p className="card-text">Workflow automation for batch image processing</p>
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
                <h5 className="card-title"><i className="fas fa-code"/> Jupyter</h5>
                <p className="card-text">Interactive experimentation with ComfyUI APIs</p>
                <div className="d-flex gap-2">
                  <a href="/service/jupyter" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-comments"/> Open WebUI</h5>
                <p className="card-text">Chat interface for AI-assisted image creation workflows</p>
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
