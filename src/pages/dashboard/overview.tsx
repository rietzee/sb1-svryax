import { useAuthStore } from '@/store/auth';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Overview() {
  const { user } = useAuthStore();

  if (!user) return null;

  const balancePercentage = (user.balance.current / user.balance.limit) * 100;
  const quotaPercentage = (user.sendingQuota.current / user.sendingQuota.limit) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold">Balance</h3>
          <div className="mt-2 space-y-2">
            <p className="text-2xl font-bold">${user.balance.current}</p>
            <Progress value={balancePercentage} />
            <p className="text-sm text-muted-foreground">
              ${user.balance.used} used of ${user.balance.limit} limit
            </p>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Account Type</h3>
          <p className="mt-2 text-2xl font-bold capitalize">{user.groupType}</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">Sending Quota</h3>
          <div className="mt-2 space-y-2">
            <p className="text-2xl font-bold">{user.sendingQuota.current}</p>
            <Progress value={quotaPercentage} />
            <p className="text-sm text-muted-foreground">
              of {user.sendingQuota.limit} emails
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}