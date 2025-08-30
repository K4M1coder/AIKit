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
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://github.com/comfyanonymous/ComfyUI" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/> GitHub Repository
          </a>
          <a href="https://comfyworkflows.com/" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-cloud"/> Community Workflows
          </a>
        </div>
      ),
    },
  ],
};
