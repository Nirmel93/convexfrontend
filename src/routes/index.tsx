import { createFileRoute } from "@tanstack/react-router";
import { Header } from "~/convexfrontend/header";
import { Footer } from "~/convexfrontend/footer";
import { LandingPage } from "~/convexfrontend/landing-page";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}
