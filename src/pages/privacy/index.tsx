import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          <p>Last updated: February 21, 2024</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when
            you create an account, use our services, or contact us for support.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, to process your transactions, and to communicate with
            you.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your
            information with third-party service providers who assist us in
            providing our services.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You may also have additional rights depending on your
            jurisdiction.
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