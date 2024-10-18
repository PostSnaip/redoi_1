import React from 'react';
import { Button } from "@/components/ui/button"
import { Send, Wallet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'BTC', value: 4000 },
  { name: 'ETH', value: 3000 },
  { name: 'ADA', value: 2000 },
  { name: 'DOT', value: 2780 },
  { name: 'XRP', value: 1890 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Your Crypto Portfolio</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Portfolio Value</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="flex items-center justify-center">
          <Send className="mr-2 h-4 w-4" />
          Send Referral Link
        </Button>
        <Button className="flex items-center justify-center">
          <Wallet className="mr-2 h-4 w-4" />
          View Statistics
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;