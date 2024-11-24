import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Shield, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">SMTP Wrapper</h1>
            <nav className="hidden space-x-6 md:flex">
              <Link to="/blog/1" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simplify Your Email Infrastructure
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            One API to integrate with Mailgun, SendGrid, and SMTP2GO. Switch providers
            seamlessly without changing your code.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/auth/sign-up">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </Link>
          </div>
        </section>

        <section className="border-t bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <Mail className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Multiple Providers</h3>
                <p className="mt-2 text-muted-foreground">
                  Integrate with leading email service providers through a single API.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Reliable Delivery</h3>
                <p className="mt-2 text-muted-foreground">
                  Automatic failover ensures your emails always reach their destination.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Easy Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Simple API and comprehensive documentation for quick implementation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/blog/1" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SMTP Wrapper. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}