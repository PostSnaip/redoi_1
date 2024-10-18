import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

const onboardingSteps = [
  {
    title: "Welcome to CryptoPortfolio",
    description: "Track and manage your crypto investments with ease.",
  },
  {
    title: "Real-time Updates",
    description: "Get live updates on your portfolio performance.",
  },
  {
    title: "Secure and Private",
    description: "Your data is encrypted and never shared.",
  },
];

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">{onboardingSteps[currentStep].title}</h2>
        <p className="text-center text-gray-600">{onboardingSteps[currentStep].description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {onboardingSteps.length}
          </span>
          <Button onClick={handleNext}>
            {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;