import ActiveShapePieChart from "@/components/analytics/ActiveShapePieChart";
import SimpleLineChart from "@/components/analytics/SimpleLineChart";
import SimpleBarChart from "@/components/analytics/SimpleBarChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, BadgePercent, Users, SmilePlus } from "lucide-react";
import Map from "@/components/map/Map";
const Home = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <DashboardCard
          title="Total Revenue"
          count="$4,523,187"
          percentage={20.1}
          icon={<TrendingUp className="text-cyan-100" size={52} />}
          iconRoundColor="bg-cyan-500 text-center rounded-full mb-2 p-3 text-cyan-100 hover:rotate-6"
          background="rounded-lg border text-card-foreground shadow-sm bg-cyan-50 dark:bg-slate-800 p-4 pb-0 flex items-center justify-center text-center hover:opacity-80"
        />
        <DashboardCard
          title="Daily Sales"
          count="$21,908"
          percentage={19}
          icon={<BadgePercent className="text-orange-100" size={52} />}
          iconRoundColor="bg-orange-500 text-orange-100 text-center rounded-full mb-2 p-3 hover:rotate-6"
          background="bg-orange-50 dark:bg-slate-800 rounded-lg border text-card-foreground shadow-sm p-4 pb-0 flex items-center justify-center text-center hover:opacity-80"
        />
        <DashboardCard
          title="Registered Users"
          count="2,823"
          percentage={+15.2}
          icon={<Users className="text-green-100" size={52} />}
          iconRoundColor="bg-green-500 text-green-100 text-center rounded-full mb-2 p-3 hover:rotate-6"
          background="bg-green-50 dark:bg-slate-800 rounded-lg border text-card-foreground shadow-sm p-4 pb-0 flex items-center justify-center text-center hover:opacity-80"
        />
        <DashboardCard
          title="Subscriptions"
          count="+2,350"
          percentage={102.8}
          icon={<SmilePlus className="text-purple-100" size={52} />}
          iconRoundColor="bg-purple-500 text-purple-100 text-center rounded-full mb-2 p-3 hover:rotate-6"
          background="bg-purple-50 dark:bg-slate-800 rounded-lg border text-card-foreground shadow-sm p-4 pb-0 flex items-center justify-center text-center hover:opacity-80"
        />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 rounded-sm border border-none bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <SimpleLineChart />
        </div>
        <div className="col-span-12 rounded-sm border border-none bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <SimpleBarChart />
        </div>
        <div className="col-span-12 rounded-sm border border-none bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
          <ActiveShapePieChart />
        </div>
        <div className="col-span-12 rounded-sm border border-none bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
          <Map />
        </div>
      </div>
      <div className="p-10 mt-4 md:mt-6 bg-white rounded-md">
        <DashboardTable />
      </div>
    </>
  );
};

export default Home;
