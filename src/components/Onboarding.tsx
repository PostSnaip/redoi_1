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
    <div className="relative w-full h-screen">
      {onboardingSteps.map((step, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            index === currentStep ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${step.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
            <div className="max-w-md mx-auto w-full space-y-4">
              <h2 className="text-2xl font-bold text-center text-white">{step.title}</h2>
              <p className="text-center text-gray-300">{step.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Step {index + 1} of {onboardingSteps.length}
                </span>
                <Button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600">
                  {index === onboardingSteps.length - 1 ? "Get Started" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Onboarding;