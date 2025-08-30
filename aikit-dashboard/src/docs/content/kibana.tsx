import type { DocConfig } from '../../components/docs/DocLayout';

export const kibanaDoc: DocConfig = {
  id: 'kibana',
  title: 'Kibana',
  icon: 'fa-chart-line',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Kibana provides visualization and dashboarding for Elasticsearch data, enabling quick insights into logs, metrics, and traces.
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
                Open <a className="btn btn-sm btn-primary" href="http://localhost:5601" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:5601</a>
              </li>
              <li>Create an index pattern for your Elasticsearch indices</li>
              <li>Build a dashboard with visualizations</li>
            </ol>
          </div>
        </div>
      ),
    },
  ],
};
