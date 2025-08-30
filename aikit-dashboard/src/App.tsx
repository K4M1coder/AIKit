import './App.css';
import { Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './rbac/AuthContext';
import { aiServices } from './services/aiServices';
import { useState } from 'react';
import { DocLayout } from './components/docs/DocLayout';
import { docRegistry } from './docs/registry';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('user');
  return (
    <div className="login-box">
      <h2>Login</h2>
      <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>
      <button onClick={() => { login(selectedRole as any); navigate('/'); }}>Login</button>
    </div>
  );
}

function RequireRole({ role, children }: { role: string, children: React.ReactNode }) {
  const { role: userRole } = useAuth();
  if (userRole !== role) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function ServiceList() {
  return (
    <div className="container-fluid">
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h2 className="h5 mb-0"><i className="fas fa-server me-2"></i>Services</h2>
        </div>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {aiServices.map(s => (
              <div className="col" key={s.id}>
                <div className="card h-100 service-card">
                  <div className="card-body">
                    <h5 className="card-title d-flex align-items-center gap-2">
                      {serviceIcons[s.id] && <img src={serviceIcons[s.id]} width={24} height={24} alt={s.name + ' icon'} />}
                      {s.name}
                    </h5>
                    <p className="card-text">{s.description}</p>
                    {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2"><i className="fas fa-external-link-alt"></i> Open</a>}
                    <Link to={`/service/${s.id}`} className="btn btn-outline-info btn-sm me-2"><i className="fas fa-file-alt"></i> Internal Docs</Link>
                  </div>
                  <div className="card-footer text-muted">
                    <small>Port: {s.port || 'N/A'}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceDocPage({ id }: { id: string }) {
  const service = aiServices.find(s => s.id === id);
  if (!service) return <div>Service not found</div>;
  // Prefer React-based docs if available, else fallback to static HTML iframe
  const reactDoc = docRegistry[id];
  if (reactDoc) {
    return <DocLayout config={reactDoc} />;
  }
  return (
    <div>
      <iframe
        src={`/docs/${service.docFile}`}
        title={service.name + ' docs'}
        style={{ width: '100%', height: '80vh', border: '1px solid #ccc', background: '#fff' }}
      />
    </div>
  );
}

function AdminPage() {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <p>Only visible to admins.</p>
    </div>
  );
}

const serviceIcons: Record<string, string> = {
  n8n: 'https://n8n.io/favicon.ico',
  openwebui: 'https://openwebui.com/favicon.ico',
  flowise: 'https://flowiseai.com/favicon.ico',
  qdrant: 'https://qdrant.tech/favicon.ico',
  jupyter: 'https://jupyter.org/favicon.ico',
  gitingest: 'https://github.com/favicon.ico',
  crewai: 'https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66e1e4bddb9f194838194eb2_256x256.png',
  comfyui: 'https://www.postgresql.org/favicon.ico',
  elasticsearch: 'https://www.postgresql.org/favicon.ico',
  kibana: 'https://www.postgresql.org/favicon.ico',
  logstash: 'https://www.postgresql.org/favicon.ico',
  ollama: 'https://ollama.com/favicon.ico',
};

function NavBar() {
  const { role, logout } = useAuth();
  return (
    <header className="bg-dark text-white py-3 mb-4 rounded">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div>
          <h1 className="h4 mb-0"><i className="fas fa-robot me-2"></i>AIKit Dashboard</h1>
          <span className="text-secondary ms-2">Self-hosted AI Toolkit Services</span>
        </div>
        <nav className="d-flex align-items-center gap-3">
          <Link className="text-white text-decoration-none" to="/">Dashboard</Link>
          <Link className="text-white text-decoration-none" to="/admin">Admin</Link>
          <span className="badge bg-info text-dark ms-3">Role: <b>{role}</b></span>
          {role !== 'guest' ? (
            <button className="btn btn-outline-light btn-sm ms-2" onClick={logout}>Logout</button>
          ) : (
            <Link className="btn btn-outline-light btn-sm ms-2" to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={
          <RequireRole role="admin">
            <AdminPage />
          </RequireRole>
        } />
        <Route path="/service/:id" element={<ServiceDocRoute />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

function ServiceDocRoute() {
  const { id } = useParams();
  if (!id) return <div>Missing service id</div>;
  return <ServiceDocPage id={id} />;
}

export default App;
