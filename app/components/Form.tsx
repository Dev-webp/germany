"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Resume upload state - NOW MANDATORY
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (validTypes.includes(file.type)) {
        setResumeFile(file);
        setError(""); // Clear any resume error
      } else {
        alert('Please upload a PDF or Word document');
      }
    }
  };

  // Remove uploaded file
  const removeFile = () => {
    setResumeFile(null);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    // MANDATORY CHECK: Resume must be uploaded
    if (!resumeFile) {
      setError("Please upload your resume to continue");
      return;
    }

    setLoading(true);

    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      experience: { value: string };
      degree: { value: string };
    };

    // Create FormData to include file
    const formData = new FormData();
    formData.append('name', form.name.value);
    formData.append('email', form.email.value);
    formData.append('phone', form.phone.value);
    formData.append('experience', form.experience.value);
    formData.append('degree', form.degree.value);
    formData.append('resume', resumeFile); // Resume is now required

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send");

      router.push("/germany-opportunity-card-2026/thankyou");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Pure white inputs with thick black text
  const inputStyles = `
    peer w-full border border-gray-200 bg-white/100
    px-3 py-2 sm:py-2.5 text-sm text-black font-medium shadow-sm outline-none
    ring-1 ring-gray-200 backdrop-blur-none transition-all duration-300
    placeholder:text-gray-500 focus:border-orange-400/80 focus:ring-2 focus:ring-orange-400/30
    rounded-xl
  `;

  const labelStyles = `
    ml-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-gray-800
  `;

  return (
    <div className="relative mt-4 sm:mt-10 flex w-full items-center justify-center px-3 sm:px-6">
      <div className="group relative w-full max-w-lg lg:max-w-md xl:max-w-lg">
        {/* Orange Glow Border */}
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-300/20 opacity-90 blur rounded-3xl transition duration-700 group-hover:from-orange-400/40 group-hover:via-orange-300/50 group-hover:to-orange-200/40" />

        {/* Single Section Card - ONE continuous block */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/95 via-orange-400/80 to-orange-300/70 rounded-3xl shadow-2xl">
          {/* Header - Text Only (No Image) */}
          <div className="relative sm:px-2 sm:py-2 lg:px-2 lg:py-2 text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
              Check Your Eligibility for the Germany
            </h3>
          </div>

          {/* Form - same section, just below header */}
          <form
            onSubmit={handleSubmit}
            className="space-y-2 sm:space-y-2 lg:space-y-2 px-4 py-4 sm:px-6 sm:py-5 lg:px-4 lg:py-3.5"
          >
            {/* Basic Info Grid */}
            <div className="grid gap-2.5 sm:gap-3 lg:gap-2">
              <div className="space-y-1">
                <label className={labelStyles}>Full Name</label>
                <input
                  name="name"
                  required
                  className={inputStyles}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1">
                <label className={labelStyles}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputStyles}
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-1">
                <label className={labelStyles}>WhatsApp / Phone</label>
                <input
                  name="phone"
                  required
                  className={inputStyles}
                  placeholder="+91..."
                />
              </div>
            </div>

            {/* Selection Grid */}
            <div className="grid gap-2.5 sm:gap-3 lg:gap-2 grid-cols-1 lg:grid-cols-1">
              <div className="space-y-1">
                <label className={labelStyles}>Experience</label>
                <select name="experience" required className={inputStyles}>
                  <option value="" className="bg-white text-gray-800">
                    Select
                  </option>
                  <option value="0-1" className="bg-white text-gray-900">
                    0-1 Year
                  </option>
                  <option value="1-3" className="bg-white text-gray-900">
                    1-3 Years
                  </option>
                  <option value="3-5" className="bg-white text-gray-900">
                    3-5 Years
                  </option>
                  <option value="5+" className="bg-white text-gray-900">
                    5+ Years
                  </option>
                </select>
              </div>
              <div className="space-y-1">
                <label className={labelStyles}>Education</label>
                <select name="degree" required className={inputStyles}>
                  <option value="" className="bg-white text-gray-800">
                    Select
                  </option>
                  <option value="Bachelors" className="bg-white text-gray-900">
                    Bachelor&apos;s
                  </option>
                  <option value="Masters" className="bg-white text-gray-900">
                    Master&apos;s
                  </option>
                  <option value="PhD" className="bg-white text-gray-900">
                    PhD
                  </option>
                </select>
              </div>
            </div>

            {/* MANDATORY Resume Upload Section */}
            <div className="space-y-1">
              <label className={labelStyles}>
                Upload Resume <span className="text-red-600">*</span>
              </label>
              {!resumeFile ? (
                <label className="cursor-pointer block">
                  <div className="w-full p-4 bg-white/90 border-2 border-dashed border-orange-400 rounded-xl hover:bg-white hover:border-orange-500 transition-all flex flex-col items-center justify-center gap-2">
                    {/* Upload Icon SVG */}
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-xs font-bold text-orange-600">Click to upload resume (Required)</span>
                    <span className="text-[10px] text-gray-500">PDF, DOC, or DOCX (Max 5MB)</span>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="w-full p-3 bg-green-50 border border-green-300 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* File Icon SVG */}
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-green-900">{resumeFile.name}</p>
                      <p className="text-[10px] text-green-600">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    {/* X Icon SVG */}
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {error && (
              <div className="animate-in fade-in slide-in-from-top-1 border border-red-300 bg-red-50 px-3 py-2 text-center text-[11px] sm:text-sm font-medium text-red-800 rounded-xl">
                {error}
              </div>
            )}

            {/* Premium Button */}
            <div className="flex flex-col items-center gap-2 pt-1">
              <button
                type="submit"
                disabled={loading}
                className={`
                  relative inline-flex items-center justify-center
                  w-full sm:w-auto
                  overflow-hidden rounded-2xl bg-white
                  px-6 sm:px-8 lg:px-7 py-2.5 sm:py-3 lg:py-2.5 text-[11px] sm:text-sm font-bold uppercase tracking-[0.2em]
                  text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:bg-orange-50
                  active:scale-[0.98] active:bg-white
                  disabled:opacity-60 disabled:cursor-not-allowed border-2 border-gray-200 hover:border-black
                `}
              >
                <span className="relative flex items-center gap-2">
                  {loading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin text-gray-600"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing
                    </>
                  ) : (
                    "Evaluate Eligibility"
                  )}
                </span>
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}