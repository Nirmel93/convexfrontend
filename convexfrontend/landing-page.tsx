import { CheckCircle, ShoppingCart } from "lucide-react";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
                    A better way to build your SaaS
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our platform provides all the tools you need to launch and
                    grow your subscription business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                  Everything you need to succeed
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform is packed with features to help you manage your
                  subscriptions, billing, and customers with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Subscription Management
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily manage your subscription plans and customers.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Automated Billing
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Set up recurring billing and let our platform handle the
                  rest.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Developer APIs
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Integrate with our powerful APIs to build custom solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-50">
                Trusted by businesses worldwide
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See what our customers are saying about our platform.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                    "This is the best SaaS platform I've ever used. It's
                    intuitive, powerful, and has saved me countless hours of
                    work."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - John Doe, CEO of Acme Inc.
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                    "I was able to launch my subscription business in just a few
                    days thanks to this platform. Highly recommended!"
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - Jane Smith, Founder of SubCo
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                    "The customer support is top-notch. They're always
                    responsive and helpful whenever I have a question."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    - Bob Johnson, Developer at TechCorp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-50">
                Ready to get started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up for a free trial and see for yourself how our platform
                can help you grow your business.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
