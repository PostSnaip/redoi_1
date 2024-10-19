import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';

const onboardingSteps = [
  {
    title: "Welcome to $REDOI",
    description: "Discover the power of our crypto ecosystem.",
    image: "/images/redoi-logo.png"
  },
  {
    title: "Commissions and Rewards",
    description: "60% holder rewards, 40% investments in other STON projects.",
    image: "/images/commissions.png"
  },
  {
    title: "Project Roadmap",
    description: "Exciting developments planned for 2024-2025.",
    image: "/images/roadmap.png"
  }
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div 
        className="max-w-md w-full h-screen bg-cover bg-center flex flex-col justify-end p-6 space-y-6"
        style={{ backgroundImage: `url(${onboardingSteps[currentStep].image})` }}
      >
        <div className="bg-black bg-opacity-50 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center">{onboardingSteps[currentStep].title}</h2>
          <p className="text-center text-gray-300">{onboardingSteps[currentStep].description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">
              Step {currentStep + 1} of {onboardingSteps.length}
            </span>
            <Button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600">
              {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;