import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans`}> 
      <header className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <Button onClick={toggleDarkMode} variant="outline" className="flex items-center gap-2">
          <SunIcon className="w-4 h-4" />
          Toggle Dark Mode
        </Button>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-semibold">Get Started</h2>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">Edit <code className="bg-gray-200 px-1 py-0.5 rounded">app/page.tsx</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}