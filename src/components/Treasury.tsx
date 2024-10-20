import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Wallet, Coins, ArrowUpDown, Package } from 'lucide-react';

interface TreasuryData {
  balance: string;
  transactions: number;
  lastTransaction: string;
  collectibles: number;
  tokens: number;
}

const Treasury: React.FC = () => {
  const [data, setData] = useState<TreasuryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreasuryData = async () => {
      try {
        const address = 'UQABZJQbHg9ZSKZpko4qp58C_Im07yrq1Lwf1zRRkTIaI7CR';
        const apiUrl = `https://toncenter.com/api/v2/getAddressInformation?address=${address}`;
        
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.ok) {
          const balance = parseInt(result.result.balance) / 1e9; // Convert from nanotons to tons
          const lastTx = result.result.last_transaction_id.lt;

          setData({
            balance: `${balance.toFixed(2)} TON`,
            transactions: parseInt(result.result.sync_utime.toString()),
            lastTransaction: new Date(lastTx * 1000).toLocaleString(),
            collectibles: 0, // We don't have this information from this API
            tokens: 0, // We don't have this information from this API
          });
        } else {
          throw new Error('Failed to fetch data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching treasury data:', error);
        setLoading(false);
      }
    };

    fetchTreasuryData();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Treasury</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Balance
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-[200px]" />
            ) : (
              <div className="text-2xl font-bold">{data?.balance}</div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transactions
            </CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-[100px]" />
            ) : (
              <div className="text-2xl font-bold">{data?.transactions}</div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Last Transaction
            </CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-[200px]" />
            ) : (
              <div className="text-2xl font-bold">{data?.lastTransaction}</div>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Collectibles
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-[100px]" />
            ) : (
              <div className="text-2xl font-bold">{data?.collectibles}</div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tokens
            </CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-[100px]" />
            ) : (
              <div className="text-2xl font-bold">{data?.tokens}</div>
            )}
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Treasury Address</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground break-all">
            UQABZJQbHg9ZSKZpko4qp58C_Im07yrq1Lwf1zRRkTIaI7CR
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Treasury;