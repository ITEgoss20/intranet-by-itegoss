import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Accessories", customer: 7 },
  { name: "Bracelet", customer: 34, repair: 14, ico: 18, pd: 10 }, 
  { name: "Earring", customer: 33, repair: 41, ico: 5, pd: 31, factory: 111 }, 
  { name: "Gents Bracelet", factory: 1 },
  { name: "Maangtika", customer: 3 },
  { name: "Necklace", factory: 4 },
  { name: "Necklace Set", customer: 24, repair: 10, ico: 26, factory: 53 },
  { name: "Pendant", customer: 10, repair: 17, factory: 14 },
  { name: "Pendant Set", customer: 21, repair: 34, ico: 10, pd: 49, factory: 73 },
  { name: "Ring", customer: 15, repair: 15, ico: 1, pd: 25, factory: 34 },
  { name: "Watch", factory: 2 },
];

const colors = {
  customer: "#4CAF50",
  repair: "#0D47A1",
  ico: "#FFD700",
  pd: "#FF9800",
  factory: "#03A9F4",
};

const CustomLabel = ({ x, y, width, height, value }) => {
  if (height > 20) {
    return (
      <text x={x + width / 2} y={y + height / 2} fill="#fff" fontSize={12} textAnchor="middle">
        {value}
      </text>
    );
  }
  return null;
};

const StackedBarChart = () => {
  const formattedData = data.map((item) => {
    const total = (item.customer || 0) + (item.repair || 0) + (item.ico || 0) + (item.pd || 0) + (item.factory || 0);
    return { ...item, total };
  });

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg w-[70%] h-[450px] mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Order Summary Chart</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-30} textAnchor="end" />
          <YAxis domain={[0, 250]} ticks={[0, 50, 100, 150, 200, 250]} tick={{ fontSize: 12 }} />
          <Tooltip cursor={{ fill: 'transparent' }} />
          {/* <Legend verticalAlign="top" /> */}

          <Bar dataKey="customer" stackId="a" fill={colors.customer} name="Customer Order">
            <LabelList dataKey="customer" content={<CustomLabel />} />
          </Bar>
          <Bar dataKey="repair" stackId="a" fill={colors.repair} name="Repair Order">
            <LabelList dataKey="repair" content={<CustomLabel />} />
          </Bar>
          <Bar dataKey="ico" stackId="a" fill={colors.ico} name="ICO Order">
            <LabelList dataKey="ico" content={<CustomLabel />} />
          </Bar>
          <Bar dataKey="pd" stackId="a" fill={colors.pd} name="PD Order">
            <LabelList dataKey="pd" content={<CustomLabel />} />
          </Bar>
          <Bar dataKey="factory" stackId="a" fill={colors.factory} name="Factory Order">
            <LabelList dataKey="factory" content={<CustomLabel />} />
            <LabelList dataKey="total" position="top" fill="#000" fontWeight="bold" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: colors.customer }}></span>Customer Order</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: colors.repair }}></span>Repair Order</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: colors.ico }}></span>ICO Order</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: colors.pd }}></span>PD Order</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 rounded-full" style={{ background: colors.factory }}></span>Factory Order</div>
      </div>
    </div>
  );
};

export default StackedBarChart;
