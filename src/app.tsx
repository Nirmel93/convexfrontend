// import { ConvexReactClient } from "convex/react";
import { RouterProvider } from "@tanstack/react-router";
// import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { router } from "@/router";
// import { ConvexAuthProvider } from "@convex-dev/auth/react";
import "@/i18n";

// Convex client
// const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
// const convexQueryClient = new ConvexQueryClient(convex);
const queryClient = new QueryClient();

function InnerApp() {
  return <RouterProvider router={router} context={{ queryClient }} />;
}

const helmetContext = {};

export default function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

