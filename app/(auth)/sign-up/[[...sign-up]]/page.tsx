'use client';

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col md:flex-row">
      {/* Left Panel - Desktop only */}
      <div className="hidden md:flex md:w-1/2 flex-col justify-center px-8 border-r border-border">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            ghost-ai
          </h1>
          <p className="text-text-secondary mb-8">
            AI-powered creative writing assistant
          </p>
          <ul className="space-y-3 text-text-secondary text-sm">
            <li>✓ Write with AI assistance</li>
            <li>✓ Organize your projects</li>
            <li>✓ Collaborate seamlessly</li>
          </ul>
        </div>
      </div>

      {/* Right Panel / Mobile - Clerk Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-12 md:py-0">
        <div className="w-full max-w-sm">
          <SignUp
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none border-0",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
