import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Templates,
  Mail,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const handleSignOut = () => {
    setUser(null);
    navigate('/auth/sign-in');
  };

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <h1 className="text-lg font-semibold">SMTP Wrapper</h1>
          </div>
          <nav className="flex-1 space-y-1 p-2">
            <Link to="/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
            </Link>
            <Link to="/dashboard/templates">
              <Button variant="ghost" className="w-full justify-start">
                <Templates className="mr-2 h-4 w-4" />
                Email Templates
              </Button>
            </Link>
            <Link to="/dashboard/send-email">
              <Button variant="ghost" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </Link>
            <Link to="/dashboard/contacts">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Contact List
              </Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
          <Separator />
          <div className="p-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6">{children}</div>
      </main>
    </div>
  );
}