import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Disclaimer() {
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
          <h1>Disclaimer</h1>
          <p>Last updated: February 21, 2024</p>

          <h2>1. Service Availability</h2>
          <p>
            While we strive to provide uninterrupted service, we cannot guarantee
            that our service will be available at all times. We are not
            responsible for any losses resulting from service interruptions.
          </p>

          <h2>2. Third-Party Services</h2>
          <p>
            Our service integrates with third-party email service providers. We
            are not responsible for the availability, reliability, or performance
            of these third-party services.
          </p>

          <h2>3. Email Delivery</h2>
          <p>
            While we make every effort to ensure reliable email delivery, we
            cannot guarantee that all emails will be delivered successfully due to
            factors beyond our control.
          </p>

          <h2>4. No Warranties</h2>
          <p>
            The service is provided "as is" without any warranties, express or
            implied. We disclaim all warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall SMTP Wrapper be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out of
            or relating to your use of the service.
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