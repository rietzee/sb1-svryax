import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="prose prose-neutral mx-auto dark:prose-invert lg:prose-lg">
          <h1>Terms of Service</h1>
          <p>Last updated: February 21, 2024</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using SMTP Wrapper's services, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            You agree to use the service only for lawful purposes and in
            accordance with these Terms of Service. You are responsible for
            maintaining the security of your account.
          </p>

          <h2>3. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue the service at any time,
            with or without notice. We shall not be liable to you or any third
            party for any modification, suspension, or discontinuance of the
            service.
          </p>

          <h2>4. Pricing and Payment</h2>
          <p>
            You agree to pay all fees associated with your use of the service.
            Fees are non-refundable except as required by law or as explicitly
            stated in these Terms.
          </p>

          <h2>5. Privacy</h2>
          <p>
            Your use of the service is also governed by our Privacy Policy. Please
            review our Privacy Policy to understand our practices.
          </p>
        </div>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SMTP Wrapper. All rights reserved.
        </div>
      </footer>
    </div>
  );
}