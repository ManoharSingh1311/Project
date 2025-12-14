import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Assets from './components/Assets';
import Production from './components/Production';
import Maintenance from './components/Maintenance';
import Compliance from './components/Compliance';
import Analytics from './components/Analytics';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'assets':
        return <Assets />;
      case 'production':
        return <Production />;
      case 'maintenance':
        return <Maintenance />;
      case 'compliance':
        return <Compliance />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      onClick={(e) => {
        const target = e.target;
        const button = target.closest('button');

        if (button) {
          const navItems = [
            'dashboard',
            'assets',
            'production',
            'maintenance',
            'compliance',
            'analytics',
          ];

          const buttonText = button.textContent?.toLowerCase() || '';
          const page = navItems.find(item => buttonText.includes(item));

          if (page) {
            setActivePage(page);
          }
        }
      }}
    >
      <Layout>
        {renderPage()}
      </Layout>
    </div>
  );
}

export default App;
