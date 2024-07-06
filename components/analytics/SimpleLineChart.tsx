"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from "@/lib/analytics";

const SimpleLineChart = () => {
  const [opacity, setOpacity] = React.useState({
    uv: 1,
    pv: 1,
  });

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Analyics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  strokeOpacity={opacity.pv}
                  stroke="#6bbaf3"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  strokeOpacity={opacity.uv}
                  stroke="#b4edff"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SimpleLineChart;
