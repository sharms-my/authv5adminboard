import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: string;
  percentage: number;
  background: string;
  iconRoundColor: string;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({
  title,
  count,
  percentage,
  background,
  iconRoundColor,
  icon,
}: DashboardCardProps) => {
  return (
    <Card className={background}>
      <CardContent className="flex flex-col items-center justify-center pb-2">
        <div className={iconRoundColor}>{icon}</div>
        <div className="text-center text-sm mb-2">{title}</div>
        <div className="text-xl font-bold mb-2">{count}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {percentage}% from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
