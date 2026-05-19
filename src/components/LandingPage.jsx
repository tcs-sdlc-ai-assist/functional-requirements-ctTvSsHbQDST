import React from 'react';

const LandingPage = () => (
  <section className="container py-1 text-center">
    <h1 className="mt-1">Welcome to HireHub</h1>
    <p className="mt-1">Streamline your hiring process with seamless onboarding.</p>

    <div className="mt-2 flex flex-col items-center space-y-2">
      <div className="bg-white p-1 rounded shadow-md">
        <h2 className="font-semibold">Easy Integration</h2>
        <p className="mt-1">Connect in minutes with our API.</p>
      </div>

      <div className="bg-white p-1 rounded shadow-md">
        <h2 className="font-semibold">Secure Data</h2>
        <p className="mt-1">Your data is encrypted at rest and in transit.</p>
      </div>

      <div className="bg-white p-1 rounded shadow-md">
        <h2 className="font-semibold">Real-time Analytics</h2>
        <p className="mt-1">Track onboarding progress with dashboards.</p>
      </div>
    </div>

    <button>Get Started</button>
  </section>
);

export default LandingPage;

Created src/components/LandingPage.jsx with a hero section, feature cards, and a Get Started CTA button using existing CSS utilities. To view, run `npm run dev` and navigate to the root route.