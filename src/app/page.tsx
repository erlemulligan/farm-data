import Image from "next/image";
import Button from '@/app/ui/Button'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full text-sm">
        <h1 className="text-6xl font-bold mb-8">Farm Dashboard</h1>
        <Button href="/usda" target="_self">
          Find USDA Data by Survey State
        </Button>
      </div>
    </main>
  );
}
