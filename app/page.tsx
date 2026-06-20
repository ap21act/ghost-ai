import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-4xl font-semibold text-text-primary">Welcome</h1>
      <Button>Get Started</Button>
    </main>
  );
}
