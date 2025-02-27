
import { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, Repeat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TradePanel = () => {
  const [activeTab, setActiveTab] = useState<'trade' | 'invest'>('trade');
  const [tradeAmount, setTradeAmount] = useState<string>('');
  
  const marketData = [
    { time: 'May', value: 20 },
    { time: 'Jun', value: 25 },
    { time: 'Jul', value: 22 },
    { time: 'Aug', value: 30 },
    { time: 'Sep', value: 28 },
    { time: 'Oct', value: 35 },
    { time: 'Nov', value: 40 },
  ];
  
  const maxValue = Math.max(...marketData.map(d => d.value));
  
  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-6">
        <button
          className={cn(
            "flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all",
            activeTab === 'trade' 
              ? 'bg-yuzn-dark-lightest border border-yuzn-green/20 text-white' 
              : 'bg-transparent border border-white/10 text-white/60 hover:text-white hover:bg-white/5'
          )}
          onClick={() => setActiveTab('trade')}
        >
          <Repeat className="h-4 w-4" />
          <span>Trade</span>
        </button>
        <button
          className={cn(
            "flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all",
            activeTab === 'invest' 
              ? 'bg-yuzn-dark-lightest border border-yuzn-blue/20 text-white' 
              : 'bg-transparent border border-white/10 text-white/60 hover:text-white hover:bg-white/5'
          )}
          onClick={() => setActiveTab('invest')}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Invest</span>
        </button>
      </div>
      
      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-medium">mCC Market Value</h3>
            <p className="text-white/60 text-sm">Current exchange rate: 1 mCC = $3.24</p>
          </div>
          <div className="flex items-center text-yuzn-green">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+4.3%</span>
          </div>
        </div>
        
        <div className="h-36 w-full flex items-end space-x-1">
          {marketData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <div className="relative w-full">
                <div 
                  className="w-full bg-gradient-to-t from-yuzn-green/30 to-yuzn-blue/30 rounded-sm hover:from-yuzn-green/50 hover:to-yuzn-blue/50 transition-all"
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity bg-yuzn-dark-lightest text-white text-xs py-1 px-2 rounded pointer-events-none">
                    {item.value} mCC
                  </div>
                </div>
              </div>
              <span className="text-xs text-white/60 mt-2">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
      
      {activeTab === 'trade' && (
        <div className="glass-card rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Quick Trade</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Amount (mCC)</label>
              <Input 
                type="number"
                placeholder="Enter amount to trade"
                value={tradeAmount}
                onChange={(e) => setTradeAmount(e.target.value)}
                className="bg-yuzn-dark-lightest border-white/10 focus:border-yuzn-green/50 focus:ring-yuzn-green/20"
              />
            </div>
            
            <div className="flex items-center justify-center py-4">
              <div className="p-2 rounded-full bg-yuzn-dark-lightest">
                <ArrowRight className="h-5 w-5 text-yuzn-green" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-white/70 mb-2">You'll Receive (USD)</label>
              <div className="p-3 rounded-lg bg-yuzn-dark-lightest border border-white/10 flex justify-between items-center">
                <span className="text-white">
                  ${!tradeAmount ? '0.00' : (parseFloat(tradeAmount) * 3.24).toFixed(2)}
                </span>
                <span className="text-xs text-white/50">Est. value</span>
              </div>
            </div>
            
            <Button className="w-full mt-2 bg-yuzn-green hover:bg-yuzn-green-dark text-yuzn-dark font-medium">
              Trade Now
            </Button>
          </div>
        </div>
      )}
      
      {activeTab === 'invest' && (
        <div className="glass-card rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Green Projects</h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/10 hover:border-yuzn-blue/30 bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Solar Energy Fund</h4>
                  <p className="text-sm text-white/60 mt-1">Solar installations in developing countries</p>
                </div>
                <div className="flex items-center text-yuzn-green">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+8.2%</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-white/70">Min Investment: 10 mCC</span>
                <span className="text-yuzn-blue">Learn More</span>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-white/10 hover:border-yuzn-blue/30 bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Reforestation Project</h4>
                  <p className="text-sm text-white/60 mt-1">Tree planting in deforested areas</p>
                </div>
                <div className="flex items-center text-yuzn-green">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+6.5%</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-white/70">Min Investment: 5 mCC</span>
                <span className="text-yuzn-blue">Learn More</span>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-white/10 hover:border-yuzn-blue/30 bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Ocean Cleanup</h4>
                  <p className="text-sm text-white/60 mt-1">Plastic removal from marine ecosystems</p>
                </div>
                <div className="flex items-center text-yuzn-blue">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-1.2%</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-white/70">Min Investment: 15 mCC</span>
                <span className="text-yuzn-blue">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradePanel;
