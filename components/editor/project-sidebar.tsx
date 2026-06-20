'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 bottom-0 z-40 w-64',
          'bg-bg-base border-r border-border',
          'flex flex-col',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ marginTop: '4rem' }} // Account for navbar height (h-16 = 4rem)
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs Section */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs defaultValue="my-projects" className="flex flex-col h-full">
            <TabsList className="w-full rounded-none border-b border-border bg-transparent p-0">
              <TabsTrigger
                value="my-projects"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary"
              >
                My Projects
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent-primary"
              >
                Shared
              </TabsTrigger>
            </TabsList>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto">
              <TabsContent value="my-projects" className="p-4">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-text-secondary text-sm">No projects yet</p>
                </div>
              </TabsContent>

              <TabsContent value="shared" className="p-4">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-text-secondary text-sm">No shared projects</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-border">
          <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>
    </>
  );
}
