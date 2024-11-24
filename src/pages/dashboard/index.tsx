import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Overview from './overview.tsx';
import Templates from './templates.tsx';
import SendEmail from './send-email.tsx';
import Contacts from './contacts.tsx';
import Settings from './settings.tsx';

export default function Dashboard() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/templates/*" element={<Templates />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
}
