import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export type DocSection = {
  id: string;
  title: string;
  content: ReactNode;
};

export interface DocConfig {
  id: string;
  title: string;
  icon?: string; // URL to icon or FontAwesome class if starts with 'fa-'
  breadcrumbTitle?: string;
  sections: DocSection[];
}

export function DocLayout({ config }: { config: DocConfig }) {
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navItems = document.querySelectorAll('.sidebar-nav .list-group-item');
      let current = '';
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - 120) current = section.id;
      });
      navItems.forEach((item) => {
        const href = (item as HTMLAnchorElement).getAttribute('href')?.slice(1);
        if (href === current) item.classList.add('active');
        else item.classList.remove('active');
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderIcon = () => {
    if (!config.icon) return null;
    if (config.icon.startsWith('fa-')) {
      return <i className={`fa-solid ${config.icon} me-2`} />;
    }
    return <img src={config.icon} width={24} height={24} alt={`${config.title} icon`} className="me-2" />;
  };

  return (
    <div className="container-fluid">
      <header className="row bg-dark text-white py-4 rounded">
        <div className="col-12 text-center">
          <h1><i className="fas fa-robot" /> AIKit Documentation</h1>
          <p className="lead">Internal documentation for AIKit services</p>
        </div>
      </header>

      <div className="row my-4">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white d-flex align-items-center">
              {renderIcon()}
              <h2 className="mb-0">{config.title} Documentation</h2>
            </div>
            <div className="card-body">
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/"><i className="fas fa-home" /> Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">{config.breadcrumbTitle || `${config.title} Documentation`}</li>
                </ol>
              </nav>

              <div className="row">
                <div className="col-md-3">
                  <div className="sidebar-nav">
                    <div className="list-group mb-4">
                      {config.sections.map((s) => (
                        <a key={s.id} href={`#${s.id}`} className="list-group-item list-group-item-action">{s.title}</a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  {config.sections.map((s) => (
                    <section id={s.id} key={s.id} className="mt-4">
                      <h3>{s.title}</h3>
                      <div>{s.content}</div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 rounded">
        <p className="mb-0">AIKit Documentation © 2025</p>
      </footer>
    </div>
  );
}
