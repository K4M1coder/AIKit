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
					<a href="https://www.elastic.co/elasticsearch" className="btn btn-outline-primary" target="_blank" rel="noreferrer">
						<i className="fas fa-book"/> Product Page
					</a>
					<a href="https://www.elastic.co/guide/index.html" className="btn btn-outline-secondary" target="_blank" rel="noreferrer">
						<i className="fas fa-book-open"/> Documentation
					</a>
				</div>
			),
		},
	],
};
