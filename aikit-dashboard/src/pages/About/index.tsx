import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Book as BookIcon,
  GitHub as GitHubIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const resources = [
    {
      title: "n8n AI Template Gallery",
      url: "https://n8n.io/workflows/?categories=AI",
      icon: <SchoolIcon />,
    },
    {
      title: "Build an AI Workflow in n8n",
      url: "https://docs.n8n.io/advanced-ai/intro-tutorial/",
      icon: <CodeIcon />,
    },
    {
      title: "Langchain Concepts in n8n",
      url: "https://docs.n8n.io/advanced-ai/langchain/langchain-n8n/",
      icon: <BookIcon />,
    },
    {
      title: "Understanding Vector Databases",
      url: "https://docs.n8n.io/advanced-ai/examples/understand-vector-databases/",
      icon: <InfoIcon />,
    },
    {
      title: "AI Agents Masterclass GitHub",
      url: "https://github.com/coleam00/ai-agents-masterclass",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        About AIKit Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Overview
            </Typography>
            <Typography paragraph>
              AIKit Dashboard is a comprehensive interface for managing and monitoring your self-hosted AI toolkit services.
              It provides a unified control panel for various AI-related services, making it easier to manage your AI infrastructure.
            </Typography>
            <Typography paragraph>
              This dashboard helps you manage services like n8n for workflow automation, Open WebUI for LLM interactions,
              Flowise for visual LangChain building, and various other AI-related tools and services.
            </Typography>
          </Paper>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Start Guide
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="1. Set up n8n" 
                    secondary="Configure n8n and create credentials for each service" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="2. Configure Open WebUI" 
                    secondary="Connect Open WebUI with Ollama for LLM interactions" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="3. Set up Flowise" 
                    secondary="Import or create workflows in Flowise" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="4. Configure Vector Storage" 
                    secondary="Set up collections in Qdrant for vector storage" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="5. Explore with Jupyter" 
                    secondary="Use Jupyter notebooks for data exploration" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Useful Resources
            </Typography>
            <List>
              {resources.map((resource, index) => (
                <ListItem key={index} component={Link} href={resource.url} target="_blank" sx={{ color: 'inherit', textDecoration: 'none' }}>
                  <ListItemIcon>
                    {resource.icon}
                  </ListItemIcon>
                  <ListItemText primary={resource.title} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Stack spacing={2} sx={{ mt: 3 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Version Information
            </Typography>
            <Typography variant="body2">
              AIKit Dashboard v1.0.0
            </Typography>
            <Link 
              href="https://github.com/yourusername/aikit-dashboard" 
              target="_blank"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <GitHubIcon fontSize="small" />
              View on GitHub
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;