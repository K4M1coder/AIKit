import type { DocConfig } from '../components/docs/DocLayout';
import { ollamaDoc } from './content/ollama';
import { crewaiDoc } from './content/crewai';
import { n8nDoc } from './content/n8n';
import { elasticDoc } from './content/elasticsearch';
import { kibanaDoc } from './content/kibana';
import { logstashDoc } from './content/logstash';
import { qdrantDoc } from './content/qdrant';
import { openwebuiDoc } from './content/openwebui';
import { flowiseDoc } from './content/flowise';
import { jupyterDoc } from './content/jupyter';
import { gitingestDoc } from './content/gitingest';
import { comfyuiDoc } from './content/comfyui';

export const docRegistry: Record<string, DocConfig> = {
  ollama: ollamaDoc,
  crewai: crewaiDoc,
  n8n: n8nDoc,
  elasticsearch: elasticDoc,
  kibana: kibanaDoc,
  logstash: logstashDoc,
  qdrant: qdrantDoc,
  openwebui: openwebuiDoc,
  flowise: flowiseDoc,
  jupyter: jupyterDoc,
  gitingest: gitingestDoc,
  comfyui: comfyuiDoc,
};
