import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
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
        <article className="prose prose-neutral mx-auto dark:prose-invert lg:prose-lg">
          <h1>Getting Started with SMTP Wrapper</h1>
          <div className="text-sm text-muted-foreground">
            Published on February 21, 2024
          </div>
          <img
            src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=1200&h=400"
            alt="Email Marketing"
            className="my-8 rounded-lg"
          />
          <p>
            Email delivery is a critical component of modern applications. Whether
            you're sending transactional emails, marketing campaigns, or system
            notifications, reliable email delivery is essential for your business.
          </p>
          <h2>Why Choose SMTP Wrapper?</h2>
          <p>
            SMTP Wrapper provides a unified API for multiple email service
            providers, including Mailgun, SendGrid, and SMTP2GO. This means you can:
          </p>
          <ul>
            <li>Switch providers without changing your code</li>
            <li>Implement automatic failover for better reliability</li>
            <li>Manage all your email services from a single dashboard</li>
          </ul>
          <h2>Getting Started</h2>
          <p>
            To start using SMTP Wrapper, simply sign up for an account and follow
            our integration guide. We provide SDKs for popular programming
            languages and comprehensive documentation to help you get up and
            running quickly.
          </p>
        </article>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SMTP Wrapper. All rights reserved.
        </div>
      </footer>
    </div>
  );
}