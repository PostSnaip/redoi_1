import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import Onboarding from '@/components/Onboarding';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {!onboardingComplete ? (
        <Onboarding onComplete={() => setOnboardingComplete(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;