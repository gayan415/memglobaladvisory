"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, RefreshCw } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type Step = "destination" | "purpose" | "education" | "experience" | "age" | "results";

interface FormData {
  destination: string;
  purpose: string;
  education: string;
  experience: string;
  age: string;
}

const destinations = [
  { value: "canada", label: "Canada", flag: "🇨🇦" },
  { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
  { value: "australia", label: "Australia", flag: "🇦🇺" },
  { value: "new-zealand", label: "New Zealand", flag: "🇳🇿" },
  { value: "europe", label: "Europe", flag: "🇪🇺" },
];

const purposes = [
  { value: "work", label: "Work / Employment" },
  { value: "study", label: "Study / Education" },
  { value: "family", label: "Family Reunification" },
  { value: "pr", label: "Permanent Residency" },
  { value: "business", label: "Business / Investment" },
];

const educationLevels = [
  { value: "phd", label: "Doctoral Degree (PhD)" },
  { value: "masters", label: "Master's Degree" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "diploma", label: "Diploma / Certificate" },
  { value: "highschool", label: "High School" },
];

const experienceLevels = [
  { value: "10plus", label: "10+ years" },
  { value: "5-10", label: "5-10 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "1-3", label: "1-3 years" },
  { value: "0-1", label: "Less than 1 year" },
];

const ageRanges = [
  { value: "18-25", label: "18-25 years" },
  { value: "26-30", label: "26-30 years" },
  { value: "31-35", label: "31-35 years" },
  { value: "36-45", label: "36-45 years" },
  { value: "46plus", label: "46+ years" },
];

const steps: Step[] = ["destination", "purpose", "education", "experience", "age", "results"];

export default function EligibilityPage() {
  const [currentStep, setCurrentStep] = useState<Step>("destination");
  const [formData, setFormData] = useState<FormData>({
    destination: "",
    purpose: "",
    education: "",
    experience: "",
    age: "",
  });

  const currentIndex = steps.indexOf(currentStep);
  const progress = ((currentIndex) / (steps.length - 1)) * 100;

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const prevStep = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const restart = () => {
    setFormData({
      destination: "",
      purpose: "",
      education: "",
      experience: "",
      age: "",
    });
    setCurrentStep("destination");
  };

  const canProceed = () => {
    switch (currentStep) {
      case "destination": return !!formData.destination;
      case "purpose": return !!formData.purpose;
      case "education": return !!formData.education;
      case "experience": return !!formData.experience;
      case "age": return !!formData.age;
      default: return true;
    }
  };

  const getRecommendations = () => {
    const recommendations: string[] = [];

    if (formData.purpose === "work") {
      recommendations.push("Skilled Worker / Employment Visa");
    }
    if (formData.purpose === "study") {
      recommendations.push("Student Visa with Post-Study Work Rights");
    }
    if (formData.purpose === "family") {
      recommendations.push("Family Sponsorship / Dependent Visa");
    }
    if (formData.purpose === "pr") {
      if (formData.education === "phd" || formData.education === "masters") {
        recommendations.push("Express Entry (High Points Potential)");
      }
      recommendations.push("Points-Based Permanent Residency");
    }
    if (formData.purpose === "business") {
      recommendations.push("Business / Investor Visa");
    }

    if (formData.experience === "10plus" || formData.experience === "5-10") {
      recommendations.push("Skilled Worker Program");
    }

    return recommendations;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-800 to-maroon-700 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-4">
              Check Your Eligibility
            </h1>
            <p className="text-lg text-maroon-100">
              Answer a few questions to discover your immigration options
            </p>
          </div>
        </Container>
      </section>

      {/* Progress Bar */}
      <div className="bg-cream-100 py-4 border-b border-cream-200">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-maroon-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Form */}
      <section className="py-12 md:py-16 bg-cream-50 min-h-[60vh]">
        <Container size="md">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-cream-200 shadow-sm">
            {/* Step: Destination */}
            {currentStep === "destination" && (
              <div>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                  Where would you like to go?
                </h2>
                <p className="text-gray-600 mb-8">Select your preferred destination</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destinations.map((dest) => (
                    <button
                      key={dest.value}
                      onClick={() => handleSelect("destination", dest.value)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-center transition-all hover:shadow-md",
                        formData.destination === dest.value
                          ? "border-maroon-600 bg-maroon-50"
                          : "border-cream-200 hover:border-maroon-300"
                      )}
                    >
                      <span className="text-4xl block mb-2">{dest.flag}</span>
                      <span className="font-medium text-maroon-800">{dest.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: Purpose */}
            {currentStep === "purpose" && (
              <div>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                  What is your main purpose?
                </h2>
                <p className="text-gray-600 mb-8">Select the primary reason for your move</p>
                <div className="space-y-3">
                  {purposes.map((purpose) => (
                    <button
                      key={purpose.value}
                      onClick={() => handleSelect("purpose", purpose.value)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between",
                        formData.purpose === purpose.value
                          ? "border-maroon-600 bg-maroon-50"
                          : "border-cream-200 hover:border-maroon-300"
                      )}
                    >
                      <span className="font-medium text-maroon-800">{purpose.label}</span>
                      {formData.purpose === purpose.value && (
                        <Check className="h-5 w-5 text-maroon-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: Education */}
            {currentStep === "education" && (
              <div>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                  What is your highest education level?
                </h2>
                <p className="text-gray-600 mb-8">Select your highest completed qualification</p>
                <div className="space-y-3">
                  {educationLevels.map((edu) => (
                    <button
                      key={edu.value}
                      onClick={() => handleSelect("education", edu.value)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between",
                        formData.education === edu.value
                          ? "border-maroon-600 bg-maroon-50"
                          : "border-cream-200 hover:border-maroon-300"
                      )}
                    >
                      <span className="font-medium text-maroon-800">{edu.label}</span>
                      {formData.education === edu.value && (
                        <Check className="h-5 w-5 text-maroon-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: Experience */}
            {currentStep === "experience" && (
              <div>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                  How many years of work experience do you have?
                </h2>
                <p className="text-gray-600 mb-8">Select your total professional experience</p>
                <div className="space-y-3">
                  {experienceLevels.map((exp) => (
                    <button
                      key={exp.value}
                      onClick={() => handleSelect("experience", exp.value)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between",
                        formData.experience === exp.value
                          ? "border-maroon-600 bg-maroon-50"
                          : "border-cream-200 hover:border-maroon-300"
                      )}
                    >
                      <span className="font-medium text-maroon-800">{exp.label}</span>
                      {formData.experience === exp.value && (
                        <Check className="h-5 w-5 text-maroon-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: Age */}
            {currentStep === "age" && (
              <div>
                <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                  What is your age range?
                </h2>
                <p className="text-gray-600 mb-8">Select your current age range</p>
                <div className="space-y-3">
                  {ageRanges.map((age) => (
                    <button
                      key={age.value}
                      onClick={() => handleSelect("age", age.value)}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between",
                        formData.age === age.value
                          ? "border-maroon-600 bg-maroon-50"
                          : "border-cream-200 hover:border-maroon-300"
                      )}
                    >
                      <span className="font-medium text-maroon-800">{age.label}</span>
                      {formData.age === age.value && (
                        <Check className="h-5 w-5 text-maroon-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {currentStep === "results" && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-maroon-900 font-heading mb-2">
                    Your Eligibility Assessment
                  </h2>
                  <p className="text-gray-600">
                    Based on your profile, here are potential pathways for you
                  </p>
                </div>

                <div className="bg-cream-50 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-maroon-900 mb-4">
                    Recommended Pathways to {destinations.find(d => d.value === formData.destination)?.label}:
                  </h3>
                  <ul className="space-y-3">
                    {getRecommendations().map((rec, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-maroon-50 rounded-xl p-6 mb-8 border border-maroon-100">
                  <h3 className="font-semibold text-maroon-900 mb-2">
                    Important Note
                  </h3>
                  <p className="text-gray-600 text-sm">
                    This is a preliminary assessment based on general criteria. Your actual eligibility depends on many factors including language proficiency, specific qualifications, and current immigration policies. Schedule a free consultation for a detailed assessment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-maroon-700 text-white font-medium rounded-lg hover:bg-maroon-800 transition-colors"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <button
                    onClick={restart}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-maroon-700 text-maroon-700 font-medium rounded-lg hover:bg-maroon-50 transition-colors"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Navigation */}
            {currentStep !== "results" && (
              <div className="flex justify-between mt-10 pt-6 border-t border-cream-200">
                <button
                  onClick={prevStep}
                  disabled={currentIndex === 0}
                  className={cn(
                    "inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors",
                    currentIndex === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-maroon-700 hover:bg-maroon-50"
                  )}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back
                </button>
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={cn(!canProceed() && "opacity-50 cursor-not-allowed")}
                >
                  {currentIndex === steps.length - 2 ? "See Results" : "Continue"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
