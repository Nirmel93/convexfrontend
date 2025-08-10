import { MountainIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 dark:bg-gray-800">
      <Link className="flex items-center justify-center" to="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">SaaS Platform</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Pricing
        </Link>
      </nav>
    </header>
  );
}
