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
  ],
};
