import React, { useState } from 'react';
import Onboarding from '@/components/Onboarding';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {!onboardingComplete ? (
        <Onboarding onComplete={() => setOnboardingComplete(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;