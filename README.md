# 🚀 Self-hosted AI toolkit

**Self-hosted AI Starter Kit** is an open, docker compose template that
quickly bootstraps a fully featured Local AI and Low Code development
environment including Open WebUI for an interface to chat with your AI agents and tools.

> [!NOTE]
> This is Cole's version with a couple of improvements
> Also, the local RAG AI Agent workflow from the video will be automatically in your
> n8n instance if you use this setup instead of the base one provided by n8n!

![n8n.io - Screenshot](https://raw.githubusercontent.com/n8n-io/self-hosted-ai-starter-kit/main/assets/n8n-demo.gif)

Curated by <https://github.com/n8n-io> and <https://github.com/coleam00>, it combines the self-hosted n8n
platform with a curated list of compatible AI products and components to
quickly get started with building self-hosted AI workflows.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Kit Overview](#kit-overview)
  - [🔍 What's included](#-whats-included)
  - [🛠️ What you can build](#-what-you-can-build)
- [📋 Prerequisites](#-prerequisites)
- [📥 Installation](#-installation)
  - [For Nvidia GPU users](#for-nvidia-gpu-users)
  - [For AMD GPU Users](#for-amd-gpu-users)
  - [For Mac / Apple Silicon users](#for-mac--apple-silicon-users)
  - [For everyone else](#for-everyone-else)
- [⚡️ Quick start](#%EF%B8%8F-quick-start)
  - [1 N8N Setup <img src="https://n8n.io/favicon.ico" width="16" height="16"/>](#1-n8n-setup-img-srchttpsn8niofaviconico-width16-height16)
  - [2 Open WebUI Setup <img src="https://openwebui.com/favicon.ico" width="16" height="16"/>](#2-open-webui-setup-img-srchttpsopenwebuicomfaviconico-width16-height16)
  - [3 Flowise Setup <img src="https://flowiseai.com/favicon.ico" width="16" height="16"/>](#3-flowise-setup-img-srchttpsflowiseaicomfaviconico-width16-height16)
  - [4 Qdrant Setup <img src="https://qdrant.tech/favicon.ico" width="16" height="16"/>](#4-qdrant-setup-img-srchttpsqdranttechfaviconico-width16-height16)
  - [5 Jupyter Setup <img src="https://jupyter.org/favicon.ico" width="16" height="16"/>](#5-jupyter-setup-img-srchttpsjupyterorgfaviconico-width16-height16)
  - [6 CrewAI Studio <img src="https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66e1e4bddb9f194838194eb2_256x256.png" width="16" height="16"/>](#6-crewai-studio-img-srchttpscdnprodwebsite-filescom66cf2bfc3ed15b02da0ca77066e1e4bddb9f194838194eb2_256x256png-width16-height16)
  - [7 GitIngest Setup <img src="https://github.com/favicon.ico" width="16" height="16"/>](#7-gitingest-setup-img-srchttpsgithubcomfaviconico-width16-height16)
  - [PostgreSQL <img src="https://www.postgresql.org/favicon.ico" width="16" height="16"/>](#postgresql-img-srchttpswwwpostgresqlorgfaviconico-width16-height16)
- [🔄 Upgrading](#-upgrading)
  - [For Nvidia GPU users](#for-nvidia-gpu-users-1)
  - [For Mac / Apple Silicon users](#for-mac--apple-silicon-users-1)
  - [For everyone else](#for-everyone-else-1)
- [💡 Example Use Cases](#-example-use-cases)
- [❗️ Troubleshooting](#-troubleshooting)
  - [Common Issues](#common-issues)
- [👓 Recommended reading](#-recommended-reading)
- [🎥 Video walkthrough](#-video-walkthrough)
- [🛍️ More AI templates](#-more-ai-templates)
  - [🎓 Learn AI key concepts](#-learn-ai-key-concepts)
  - [🤖 Local AI templates](#-local-ai-templates)
- [💭 Tips & tricks](#-tips--tricks)
  - [Accessing local files](#accessing-local-files)
- [📜 License](#-license)
- [💬 Support](#-support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Kit Overview

### 🔍 What's included

| Service    | Port | Purpose | URL |
|------------|------|---------|-----|
| ✅ [**n8n**](https://n8n.io/) | 5678 | • Workflow automation<br>• 400+ tool integrations<br>• API orchestration system | <http://localhost:5678> |
| ✅ [**Ollama**](https://ollama.com/) | 11434 | • Local LLM execution engine<br>• Multi GPU/CPU support<br>• serve Ollama & OpenAI API | <http://localhost:11434> |
| ✅ [**Open WebUI**](https://openwebui.com/) | 3000 | • RBAC advanced chat interface<br>• Pipes, Function Calling, MCP<br>• Ollama, OpenAI, OpenAPI | <http://localhost:3000> |
| ✅ [**Flowise**](https://flowiseai.com/) | 3002 | • Visual LangChain builder<br>• Workflow templates<br>• API endpoint generation | <http://localhost:3002> |
| ✅ [**Qdrant**](https://qdrant.tech/) | 6333 | • Vector DB & REST API<br>• Embedding storage, retrieval<br>• Fast retrieval, similarity search | <http://localhost:6333> |
| ✅ [**Jupyter**](https://github.com/jupyter/notebook) | 8888 | • Interactive notebooks<br>• Data visualization<br>• Code execution env | <http://localhost:8888> |
| ✅ [**GitIngest**](https://github.com/dschmura/gitingest) | 3003 | • Code analysis & indexing<br>• Repository vectorization<br>• Search API interface | <http://localhost:3003> |
| ✅ [**CrewAI Studio**](https://github.com/joaomdmoura/crewAI) | 8501 | • AI team agents orchestration<br>• Task planning & collaboration<br>• Multi-agent workflows | <http://localhost:8501> |
| ✅ [**PostgreSQL**](https://www.postgresql.org/) | 5432 | • Workflow data storage<br>• Credential management<br>• State persistence | Internal access |
| ✅ [**ConfyUI**](https://www.postgresql.org/) | 5432 | • image and video workflow<br>• Credential management<br>• State persistence | <http://localhost:8188>  |
| ✅ [**ElasticSearch**](https://www.postgresql.org/) | 5432 | • Workflow data storage<br>• Credential management<br>• State persistence | Internal access |

### 🛠️ What you can build

⭐️ **AI-Powered Documentation Systems**

- Auto-generate documentation from GitHub repositories (**GitIngest** + n8n + Qdrant)
- Create searchable knowledge bases from PDFs (**n8n** + Qdrant + Ollama)
- Build interactive code documentation (**Jupyter** + GitIngest + n8n)

⭐️ **Intelligent Data Processing**

- Process and analyze financial documents privately (**n8n** + Qdrant + Ollama)
- Extract insights from company PDFs without data leaks (**Ollama** + n8n + Qdrant)
- Transform unstructured data into vector embeddings (**Qdrant** + n8n)

⭐️ **Advanced Chat Applications**

- Custom chatbots with access to private data (**Open WebUI** + Ollama + n8n)
- Multi-agent conversation systems (**CrewAI** + n8n + Ollama)
- Context-aware assistants using vector search (**Flowise** + Qdrant + Ollama)

⭐️ **Code Analysis Tools**

- Automated code review systems (**GitIngest** + n8n + Ollama)
- Repository similarity analysis (**Qdrant** + GitIngest)
- Security vulnerability scanning (**n8n** + GitIngest + Ollama)
- Technical debt assessment (**GitIngest** + Qdrant + n8n)

⭐️ **AI Agent Orchestration**

- Teams of specialized AI agents (**CrewAI** + n8n + Ollama)
- Workflow automation (**n8n** + Flowise)
- Complex task delegation (**CrewAI** + n8n + Open WebUI)

⭐️ **Integration Solutions**

- Connect local AI models with external services (**n8n** + Ollama)
- Build custom APIs for AI workflows (**Flowise** + n8n)
- Create automated data pipelines (**n8n** + Qdrant + GitIngest)

⭐️ **Research & Analysis Tools**

- Interactive data exploration (**Jupyter** + Qdrant + n8n)
- Vector-based document retrieval (**Qdrant** + n8n + Ollama)
- Automated report generation (**n8n** + Jupyter + Ollama)

⭐️ **Development Workflows**

- Automated code documentation (**GitIngest** + n8n + Ollama)
- Smart commit message generation (**Ollama** + GitIngest + n8n)
- Code refactoring assistants (**n8n** + GitIngest + Ollama)
- PR review automation (**GitIngest** + n8n + CrewAI)

⭐️ **And Much More!**

- The possibilities are endless with tool combinations  
   Mix and match services to create custom solutions  
   Each component can be used independently or together  
   Create your own unique workflows

> [!TIP]
> The real power comes from your imagination! These tools are building blocks - combine them in ways that solve your specific needs.

## 📋 Prerequisites

- Docker & Docker Compose
- Git
- 8GB RAM minimum (16GB recommended)
- NVIDIA/AMD GPU (optional)
- GitHub account (for GitIngest)

## 📥 Installation

> [!NOTE]
> If you have not used your Nvidia GPU with Docker before, please follow the
> [Ollama Docker instructions](https://github.com/ollama/ollama/blob/main/docs/docker.md).

### For Nvidia GPU users

```
git clone https://github.com/K4M1coder/AIKit.git
cd AIKit/local-ai-packaged
docker compose --profile gpu-nvidia up -d
```

### For AMD GPU Users

```
git clone https://github.com/K4M1coder/AIKit.git
cd AIKit/local-ai-packaged
docker compose --profile gpu-amd up -d
```

### For Mac / Apple Silicon users

If you’re using a Mac with an M1 or newer processor, you can't expose your GPU
to the Docker instance, unfortunately. There are two options in this case:

1. Run the starter kit fully on CPU, like in the section "For everyone else"
   below
2. Run Ollama on your Mac for faster inference, and connect to that from the
   n8n instance

If you want to run Ollama on your mac, check the
[Ollama homepage](https://ollama.com/)
for installation instructions, and run the starter kit as follows:

```
git clone https://github.com/K4M1coder/AIKit.git
cd AIKit/local-ai-packaged
docker compose up -d
```

After you followed the quick start set-up below, change the Ollama credentials
by using `http://host.docker.internal:11434/` as the host.

### For everyone else

```
git clone https://github.com/K4M1coder/AIKit.git
cd AIKit/local-ai-packaged
docker compose --profile cpu up -d
```

## ⚡️ Quick start

The main component of the self-hosted AI starter kit is a docker compose file
pre-configured with network and disk so there isn’t much else you need to
install.  
After completing the [Installation](#-installation) steps above, follow the steps below to get started.

### React Dashboard (Port 80)

The new dashboard is a Vite + React app packaged behind nginx and exposed on <http://localhost/> (port 80).

- RBAC-protected admin sections
- AI services catalog with status and links
- Integrated documentation pages (no iframes; content authored in React)

Run it with Docker Compose:

```powershell
docker compose up -d react-dashboard
```

Or bring up the whole stack (CPU profile example):

```powershell
docker compose --profile cpu up -d
```

The legacy static dashboard and its nginx service have been removed.

### 1 N8N Setup <img src="https://n8n.io/favicon.ico" width="16" height="16"/>

1. Open <http://localhost:5678/> in your browser to set up n8n. You’ll only
   have to do this once. You are NOT creating an account with n8n in the setup here,
   it is only a local account for your instance!
2. Open the included workflow: <http://localhost:5678/workflow/vTN9y2dLXqTiDfPT>
3. Create credentials for every service:
   - Ollama URL: <http://ollama:11434>
   - Postgres: use DB, username, and password from .env. Host is postgres
   - Qdrant URL: <http://qdrant:6333> (API key can be whatever since this is running locally)
   - Google Drive: Follow [this guide from n8n](https://docs.n8n.io/integrations/builtin/credentials/google/).
      Don't use localhost for the redirect URI, just use another domain you have, it will still work!
      Alternatively, you can set up [local file triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger/).
4. Select **Test workflow** to start running the workflow.
5. If this is the first time you’re running the workflow, you may need to wait
   until Ollama finishes downloading Llama3.1. You can inspect the docker
   console logs to check on the progress.
6. Make sure to toggle the workflow as active and copy the "Production" webhook URL!

### 2 Open WebUI Setup <img src="https://openwebui.com/favicon.ico" width="16" height="16"/>

1. Open <http://localhost:3000/> for initial setup
   You’ll only have to do this once. You are NOT creating an account with Open WebUI in the setup here,
   it is only a local account for your instance!
2. Go to Workspace -> Functions -> Add Function
3. Add n8n_pipe.py code or [import from OpenWebUI](https://openwebui.com/f/coleam/n8n_pipe/)
4. Click on the gear icon and set the n8n_url to the production URL for the webhook
you copied in a previous step.
5. Toggle the function on and now it will be available in your model dropdown in the top left!

### 3 Flowise Setup <img src="https://flowiseai.com/favicon.ico" width="16" height="16"/>

1. Access Flowise at <http://localhost:3002/>
2. Create or import your AI workflows
3. Connect to n8n using the webhook URLs

### 4 Qdrant Setup <img src="https://qdrant.tech/favicon.ico" width="16" height="16"/>

1. Qdrant is available at <http://localhost:6333/>
2. Use the REST API for vector operations
3. Collections persist in qdrant_storage volume

### 5 Jupyter Setup <img src="https://jupyter.org/favicon.ico" width="16" height="16"/>

1. Access JupyterLab at <http://localhost:8888/lab>
2. Use token from .env file (JUPYTER_TOKEN)
3. Notebooks are saved in ./jupyter/notebooks
4. Shared data available in read-only mode at /home/jovyan/shared

### 6 CrewAI Studio <img src="https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66e1e4bddb9f194838194eb2_256x256.png" width="16" height="16"/>

1. Access CrewAI Studio at <http://localhost:8501>
2. Create and manage AI agents
3. Integrate with other services in the stack

### 7 GitIngest Setup <img src="https://github.com/favicon.ico" width="16" height="16"/>

1. Add your GitHub token to .env file:

   ```
   GITHUB_TOKEN=your-github-token-here
   ```

2. Access GitIngest at <http://localhost:3003>
3. Add repositories to analyze
4. Query code through vector search
5. Integrate with n8n workflows using the REST API

> [!TIP]
> GitIngest automatically indexes your repositories and makes them searchable through vector embeddings stored in Qdrant.

### PostgreSQL <img src="https://www.postgresql.org/favicon.ico" width="16" height="16"/>

- Databases persists in postgres_storage volume
- Credentials from .env file
- Health checks ensure availability
- Listening on Port 5432

> [!NOTE]
> This starter kit is designed to help you get started with self-hosted AI
> workflows. While it’s not fully optimized for production environments, it
> combines robust components that work well together for proof-of-concept
> projects. You can customize it to meet your specific needs
> First-time setup may require waiting for Ollama to download models. Check docker logs for progress:

```bash
docker compose logs -f ollama
```

### ELK

1. import dashboards with filebeat

```bash
docker compose exec filebeat filebeat setup -e
```

## 🔄 Upgrading

### For Nvidia GPU users

```
docker compose --profile gpu-nvidia pull
docker compose create && docker compose --profile gpu-nvidia up -d
```

### For Mac / Apple Silicon users

```
docker compose pull
docker compose create && docker compose up -d
```

### For everyone else

```
docker compose --profile cpu pull
docker compose create && docker compose --profile cpu up -d
```

## 💡 Example Use Cases

Each example includes ready-to-use workflows:

1. [Document Analysis Pipeline](workflows/document-analysis.json)
2. [Code Review Assistant](workflows/code-review.json)
3. [Research Helper](workflows/research-helper.json)

## ❗️ Troubleshooting

### Common Issues

1. **Ollama Model Download Fails**

   ```bash
   docker compose logs -f ollama-pull-llama
   ```

2. **Database Connection Issues**

   ```bash
   docker compose logs postgres
   ```

3. **Memory Issues**
   Check container resource usage:

   ```bash
   docker stats
   ```

## 👓 Recommended reading

n8n is full of useful content for getting started quickly with its AI concepts
and nodes. If you run into an issue, go to [support](#support).

- [AI agents for developers: from theory to practice with n8n](https://blog.n8n.io/ai-agents/)
- [Tutorial: Build an AI workflow in n8n](https://docs.n8n.io/advanced-ai/intro-tutorial/)
- [Langchain Concepts in n8n](https://docs.n8n.io/advanced-ai/langchain/langchain-n8n/)
- [Demonstration of key differences between agents and chains](https://docs.n8n.io/advanced-ai/examples/agent-chain-comparison/)
- [What are vector databases?](https://docs.n8n.io/advanced-ai/examples/understand-vector-databases/)

## 🎥 Video walkthrough

- [Installing and using Local AI for n8n](https://www.youtube.com/watch?v=xz_X2N-hPg0)

## 🛍️ More AI templates

For more AI workflow ideas, visit the [**official n8n AI template
gallery**](https://n8n.io/workflows/?categories=AI). From each workflow,
select the **Use workflow** button to automatically import the workflow into
your local n8n instance.

### 🎓 Learn AI key concepts

- [AI Agent Chat](https://n8n.io/workflows/1954-ai-agent-chat/)
- [AI chat with any data source (using the n8n workflow too)](https://n8n.io/workflows/2026-ai-chat-with-any-data-source-using-the-n8n-workflow-tool/)
- [Chat with OpenAI Assistant (by adding a memory)](https://n8n.io/workflows/2098-chat-with-openai-assistant-by-adding-a-memory/)
- [Use an open-source LLM (via HuggingFace)](https://n8n.io/workflows/1980-use-an-open-source-llm-via-huggingface/)
- [Chat with PDF docs using AI (quoting sources)](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/)
- [AI agent that can scrape webpages](https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/)

### 🤖 Local AI templates

- [Tax Code Assistant](https://n8n.io/workflows/2341-build-a-tax-code-assistant-with-qdrant-mistralai-and-openai/)
- [Breakdown Documents into Study Notes with MistralAI and Qdrant](https://n8n.io/workflows/2339-breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/)
- [Financial Documents Assistant using Qdrant and](https://n8n.io/workflows/2335-build-a-financial-documents-assistant-using-qdrant-and-mistralai/) [Mistral.ai](http://mistral.ai/)
- [Recipe Recommendations with Qdrant and Mistral](https://n8n.io/workflows/2333-recipe-recommendations-with-qdrant-and-mistral/)

## 💭 Tips & tricks

### Accessing local files

The self-hosted AI starter kit will create a shared folder (by default,
located in the same directory) which is mounted to the n8n container and
allows n8n to access files on disk. This folder within the n8n container is
located at `/data/shared` -- this is the path you’ll need to use in nodes that
interact with the local filesystem.

**Nodes that interact with the local filesystem**

- [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filesreadwrite/)
- [Local File Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger/)
- [Execute Command](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/)

## 📜 License

This project is licensed under the Apache License 2.0 - see the
[LICENSE](LICENSE) file for details.

## 💬 Support

Join the conversation in the [n8n Forum](https://community.n8n.io/), where you
can:

- **Share Your Work**: Show off what you’ve built with n8n and inspire others
  in the community.
- **Ask Questions**: Whether you’re just getting started or you’re a seasoned
  pro, the community and our team are ready to support with any challenges.
- **Propose Ideas**: Have an idea for a feature or improvement? Let us know!
  We’re always eager to hear what you’d like to see next.
