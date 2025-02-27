
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Leaf, 
  ArrowUp, 
  TrendingUp, 
  Car, 
  Bike, 
  Utensils, 
  LightbulbOff, 
  ShoppingBag 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrackerItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  className?: string;
}

const TrackerItem = ({ icon: Icon, label, value, change, isPositive, className }: TrackerItemProps) => (
  <div className={cn("flex items-center p-3 rounded-lg bg-white/5 border border-white/5", className)}>
    <div className="p-3 rounded-full bg-yuzn-dark-lightest mr-3">
      <Icon className="h-5 w-5 text-yuzn-green" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-white/70">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
    <div className={`flex items-center ${isPositive ? 'text-yuzn-green' : 'text-red-400'}`}>
      {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowUp className="h-3 w-3 mr-1 transform rotate-180" />}
      <span className="text-sm">{change}</span>
    </div>
  </div>
);

const CarbonTracker = () => {
  const [totalCredits, setTotalCredits] = useState(123.45);
  const [carbonSaved, setCarbonSaved] = useState(87.2);
  
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1 card-highlight rounded-xl p-6 animate-fade-in">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-yuzn-green/10 mr-3">
              <Leaf className="h-5 w-5 text-yuzn-green" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Micro Carbon Credits</h3>
              <p className="text-white/60 text-sm">Total Balance</p>
            </div>
          </div>
          
          <div className="flex items-end">
            <span className="text-4xl font-bold text-gradient-green">{totalCredits.toFixed(2)}</span>
            <span className="ml-2 text-white/70 mb-1">mCC</span>
          </div>
          
          <div className="mt-2 flex items-center text-yuzn-green text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+6.2% from last week</span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
              Trade
            </Button>
            <Button className="bg-yuzn-green hover:bg-yuzn-green-dark text-yuzn-dark">
              Earn More
            </Button>
          </div>
        </div>
        
        <div className="flex-1 glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-yuzn-blue/10 mr-3">
              <Leaf className="h-5 w-5 text-yuzn-blue" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Carbon Impact</h3>
              <p className="text-white/60 text-sm">CO₂ Equivalent Saved</p>
            </div>
          </div>
          
          <div className="flex items-end">
            <span className="text-4xl font-bold text-gradient-blue">{carbonSaved.toFixed(1)}</span>
            <span className="ml-2 text-white/70 mb-1">kg</span>
          </div>
          
          <div className="mt-2 flex items-center text-yuzn-blue text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>Equivalent to planting 4 trees</span>
          </div>
          
          <div className="mt-6">
            <div className="w-full bg-white/10 rounded-full h-2.5 mb-1 overflow-hidden">
              <div className="bg-gradient-to-r from-yuzn-blue to-yuzn-green h-full rounded-full animate-pulse-glow" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-white/60">
              <span>Next Goal: 100kg</span>
              <span>65% Complete</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <TrackerItem 
          icon={Bike} 
          label="Cycling Instead of Driving" 
          value="2.3 mCC" 
          change="12%" 
          isPositive={true}
          className="animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />
        <TrackerItem 
          icon={Utensils} 
          label="Plant-Based Meals" 
          value="4.7 mCC" 
          change="23%" 
          isPositive={true}
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        />
        <TrackerItem 
          icon={LightbulbOff} 
          label="Energy Saving" 
          value="1.8 mCC" 
          change="5%" 
          isPositive={true}
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />
        <TrackerItem 
          icon={ShoppingBag} 
          label="Eco-Friendly Shopping" 
          value="3.1 mCC" 
          change="8%" 
          isPositive={true}
          className="animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        />
        <TrackerItem 
          icon={Car} 
          label="Car Usage" 
          value="-0.9 mCC" 
          change="4%" 
          isPositive={false}
          className="animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
    </div>
  );
};

export default CarbonTracker;
