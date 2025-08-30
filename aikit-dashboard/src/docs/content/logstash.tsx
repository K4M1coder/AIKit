import type { DocConfig } from '../../components/docs/DocLayout';

export const logstashDoc: DocConfig = {
  id: 'logstash',
  title: 'Logstash',
  icon: 'fa-filter',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <p>
          Logstash ingests and transforms data before indexing it into Elasticsearch. It supports many input, filter, and output plugins.
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
              <li>Configure inputs (e.g., Beats on port 5044) and outputs (Elasticsearch)</li>
              <li>Define filters for parsing and enrichment</li>
              <li>Start the pipeline and verify events flow to Elasticsearch</li>
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
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>http.host</code></td>
                <td>0.0.0.0</td>
                <td>Bind address for the HTTP API</td>
              </tr>
              <tr>
                <td><code>path.config</code></td>
                <td>/usr/share/logstash/pipeline</td>
                <td>Directory containing pipeline configs</td>
              </tr>
              <tr>
                <td><code>xpack.monitoring.enabled</code></td>
                <td>false</td>
                <td>Enable X-Pack monitoring</td>
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
                <h5 className="card-title"><i className="fas fa-plug"/> Inputs/Filters/Outputs</h5>
                <p className="card-text">Rich plugin ecosystem to ingest, transform and ship data</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-cogs"/> Pipelines</h5>
                <p className="card-text">Define complex pipelines using the Logstash config language</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-balance-scale"/> Persistent Queues</h5>
                <p className="card-text">Buffer events reliably to handle spikes and outages</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-rocket"/> Performance</h5>
                <p className="card-text">High-throughput processing with multi-threaded workers</p>
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
          <li className="list-group-item"><i className="fas fa-file-alt"/> Parse and ship logs</li>
          <li className="list-group-item"><i className="fas fa-exchange-alt"/> ETL from databases and message queues</li>
          <li className="list-group-item"><i className="fas fa-bug"/> Security and audit pipeline</li>
          <li className="list-group-item"><i className="fas fa-industry"/> IoT/metrics ingestion</li>
        </ul>
      ),
    },
    {
      id: 'links',
      title: 'Useful Links',
      content: (
        <div className="d-grid gap-2">
          <a href="https://www.elastic.co/logstash" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
            <i className="fas fa-book"/> Logstash Product Page
          </a>
          <a href="https://www.elastic.co/guide/en/logstash/current/index.html" className="btn btn-outline-info" target="_blank" rel="noreferrer">
            <i className="fas fa-book-open"/> Logstash Documentation
          </a>
          <a href="https://www.elastic.co/guide/en/logstash/current/plugins.html" className="btn btn-outline-secondary" target="_blank" rel="noreferrer">
            <i className="fas fa-plug"/> Plugins Reference
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
                <p className="card-text">Index and search data processed by Logstash</p>
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
                <h5 className="card-title"><i className="fas fa-chart-line"/> Kibana</h5>
                <p className="card-text">Visualize data stored in Elasticsearch</p>
                <div className="d-flex gap-2">
                  <a href="/service/kibana" className="btn btn-outline-info">
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
