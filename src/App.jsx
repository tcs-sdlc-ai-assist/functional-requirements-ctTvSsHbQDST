import React from 'react';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to HireHub Onboarding Portal</p>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <p>About HireHub</p>
  </div>
);

const Help = () => (
  <div>
    <h1>Help</h1>
    <p>Support</p>
  </div>
);

function Router() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const Component = {
    '/': Home,
    '/about': About,
    '/help': Help,
  }[path] || Home;

  return <Component />;
}

export default function App() {
  return (
    <Router />
  );
}Created src/App.jsx