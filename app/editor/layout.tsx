'use client';

import { useState } from 'react';
import { EditorNavbar } from '@/components/editor/editor-navbar';
import { ProjectSidebar } from '@/components/editor/project-sidebar';

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-bg-base min-h-screen">
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {children}
    </div>
  );
}
