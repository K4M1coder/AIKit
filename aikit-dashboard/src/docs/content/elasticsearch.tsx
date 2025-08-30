import type { DocConfig } from '../../components/docs/DocLayout';

export const elasticDoc: DocConfig = {
	id: 'elasticsearch',
	title: 'Elasticsearch',
	icon: 'fa-database',
	sections: [
		{
			id: 'overview',
			title: 'Overview',
			content: (
				<p>
					Elasticsearch is a distributed search and analytics engine. In AIKit it typically stores logs, metrics,
					and embeddings or metadata that power observability and search features.
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
								API endpoint: <a className="btn btn-sm btn-primary" href="http://localhost:9200" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"/> localhost:9200</a>
							</li>
							<li>Create an index and push a document</li>
							<li>Query with filters and text search</li>
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
					<a href="https://www.elastic.co/guide/index.html" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
						<i className="fas fa-book"/> Official Documentation
					</a>
					<a href="https://github.com/elastic/elasticsearch" className="btn btn-outline-dark" target="_blank" rel="noreferrer">
						<i className="fab fa-github"/> GitHub Repository
					</a>
					<a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html" className="btn btn-outline-info" target="_blank" rel="noreferrer">
						<i className="fas fa-code"/> REST API Reference
					</a>
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
								<td><code>discovery.type</code></td>
								<td>single-node</td>
								<td>Single node cluster configuration</td>
							</tr>
							<tr>
								<td><code>xpack.security.enabled</code></td>
								<td>false</td>
								<td>Disable security for development</td>
							</tr>
							<tr>
								<td><code>ES_JAVA_OPTS</code></td>
								<td>-Xms512m -Xmx512m</td>
								<td>JVM heap size configuration</td>
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
								<h5 className="card-title"><i className="fas fa-search"/> Full-Text Search</h5>
								<p className="card-text">Powerful full-text search capabilities with relevance scoring</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="card-body">
								<h5 className="card-title"><i className="fas fa-chart-bar"/> Analytics</h5>
								<p className="card-text">Real-time analytics and aggregations on large datasets</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="card-body">
								<h5 className="card-title"><i className="fas fa-expand-arrows-alt"/> Scalable</h5>
								<p className="card-text">Distributed architecture that scales horizontally</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="card-body">
								<h5 className="card-title"><i className="fas fa-bolt"/> Real-Time</h5>
								<p className="card-text">Near real-time search and indexing capabilities</p>
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
					<li className="list-group-item"><i className="fas fa-file-alt"/> Log and event data analysis</li>
					<li className="list-group-item"><i className="fas fa-search"/> Website and application search</li>
					<li className="list-group-item"><i className="fas fa-chart-line"/> Business intelligence and analytics</li>
					<li className="list-group-item"><i className="fas fa-shield-alt"/> Security and compliance monitoring</li>
				</ul>
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
								<h5 className="card-title"><i className="fas fa-chart-line"/> Kibana</h5>
								<p className="card-text">Data visualization and exploration tool for Elasticsearch</p>
								<div className="d-flex gap-2">
									<a href="/service/kibana" className="btn btn-outline-info">
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
								<p className="card-text">Data processing pipeline that ingests data into Elasticsearch</p>
								<div className="d-flex gap-2">
									<a href="/service/logstash" className="btn btn-outline-info">
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
								<p className="card-text">Workflow automation for data ingestion and processing</p>
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
								<p className="card-text">Interactive data analysis with Elasticsearch data</p>
								<div className="d-flex gap-2">
									<a href="/service/jupyter" className="btn btn-outline-info">
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
