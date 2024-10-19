import React from 'react';
import { Button } from "@/components/ui/button"
import { Send, Wallet, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'BTC', value: 4000 },
  { name: 'ETH', value: 3000 },
  { name: 'ADA', value: 2000 },
  { name: 'DOT', value: 2780 },
  { name: 'XRP', value: 1890 },
];

const Dashboard: React.FC = () => {
  const handleBuy = () => {
    window.open('https://app.ston.fi/swap?chartVisible=false&tt=EQCGyXsqrVyDMP0BZxS3i7Ke-zh9uoddVHETUggmPJMC2WXv&referral_address=UQDosmJftFIbrJsVG0RObWOAAfJxKVVVT44u7RhH9C8Yhe35', '_blank');
  };

  const handleConnectWallet = () => {
    // Implement Tonkeeper wallet connection logic here
    console.log('Connecting to Tonkeeper wallet...');
  };

  return (
    <div className="container mx-auto p-4 space-y-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold">Your Crypto Portfolio</h1>
      
      <div className="bg-gray-800 rounded-lg shadow p-6">
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button onClick={handleBuy} className="flex items-center justify-center bg-green-500 hover:bg-green-600">
          <DollarSign className="mr-2 h-4 w-4" />
          BUY
        </Button>
        <Button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600">
          <Send className="mr-2 h-4 w-4" />
          Send Referral Link
        </Button>
        <Button onClick={handleConnectWallet} className="flex items-center justify-center bg-purple-500 hover:bg-purple-600">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
