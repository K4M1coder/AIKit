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
    {
      id: 'configuration',
      title: 'Configuration',
      content: (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>server.port</code></td>
                <td>5601</td>
                <td>Port for Kibana web UI</td>
              </tr>
              <tr>
                <td><code>elasticsearch.hosts</code></td>
                <td>http://elasticsearch:9200</td>
                <td>Elasticsearch endpoint</td>
              </tr>
              <tr>
                <td><code>server.publicBaseUrl</code></td>
                <td>http://localhost:5601</td>
                <td>Public Base URL</td>
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
                <h5 className="card-title"><i className="fas fa-chart-line"/> Dashboards</h5>
                <p className="card-text">Create interactive visualizations and dashboards</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-search"/> Discover</h5>
                <p className="card-text">Explore your data with powerful search and filters</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-bell"/> Alerts</h5>
                <p className="card-text">Monitor data and configure alerts</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-database"/> Data Views</h5>
                <p className="card-text">Define data views and index patterns for your datasets</p>
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
          <li className="list-group-item"><i className="fas fa-server"/> Infrastructure monitoring</li>
          <li className="list-group-item"><i className="fas fa-file-alt"/> Log analysis</li>
          <li className="list-group-item"><i className="fas fa-chart-pie"/> Business analytics</li>
          <li className="list-group-item"><i className="fas fa-shield-alt"/> Security analytics</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://www.elastic.co/kibana" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Official Kibana Site
          </a>
          <a href="https://www.elastic.co/guide/en/kibana/current/index.html" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-book-open"/> Kibana Documentation
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
                <h5 className="card-title"><i className="fas fa-search"/> Elasticsearch</h5>
                <p className="card-text">Search and analytics engine powering Kibana</p>
                <div className="d-flex gap-2">
                  <a href="/service/elasticsearch" className="btn btn-outline-info">
                    <i className="fas fa-file-alt"/> Internal Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-stream"/> Logstash</h5>
                <p className="card-text">Data processing pipeline for ingestion to Elasticsearch</p>
                <div className="d-flex gap-2">
                  <a href="/service/logstash" className="btn btn-outline-info">
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
