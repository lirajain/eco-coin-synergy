
import { useState } from "react";
import { User, Trophy, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeaderboardScope = 'friends' | 'global';
type TimePeriod = 'week' | 'month' | 'year';

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  change: number;
  isYou?: boolean;
}

const Leaderboard = () => {
  const [scope, setScope] = useState<LeaderboardScope>('friends');
  const [period, setPeriod] = useState<TimePeriod>('week');
  
  const friendsData: LeaderboardUser[] = [
    { rank: 1, name: 'Alex Johnson', avatar: '/placeholder.svg', score: 542, change: 2 },
    { rank: 2, name: 'You', avatar: '/placeholder.svg', score: 487, change: 1, isYou: true },
    { rank: 3, name: 'Sam Wilson', avatar: '/placeholder.svg', score: 423, change: -1 },
    { rank: 4, name: 'Morgan Lee', avatar: '/placeholder.svg', score: 398, change: 0 },
    { rank: 5, name: 'Jamie Chen', avatar: '/placeholder.svg', score: 356, change: 2 },
  ];
  
  const globalData: LeaderboardUser[] = [
    { rank: 1, name: 'Emma Clark', avatar: '/placeholder.svg', score: 982, change: 0 },
    { rank: 2, name: 'Tom Rodriguez', avatar: '/placeholder.svg', score: 876, change: 1 },
    { rank: 3, name: 'Aisha Khan', avatar: '/placeholder.svg', score: 845, change: 2 },
    { rank: 4, name: 'Liu Wei', avatar: '/placeholder.svg', score: 792, change: -1 },
    { rank: 5, name: 'Sarah Miller', avatar: '/placeholder.svg', score: 754, change: 0 },
    { rank: 237, name: 'You', avatar: '/placeholder.svg', score: 487, change: 5, isYou: true },
  ];
  
  const data = scope === 'friends' ? friendsData : globalData;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-full border",
              scope === 'friends' 
                ? "bg-yuzn-green/10 border-yuzn-green/20 text-yuzn-green" 
                : "bg-transparent border-white/10 text-white/70 hover:text-white"
            )}
            onClick={() => setScope('friends')}
          >
            <Users className="h-4 w-4 mr-2" />
            Friends
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-full border",
              scope === 'global' 
                ? "bg-yuzn-blue/10 border-yuzn-blue/20 text-yuzn-blue" 
                : "bg-transparent border-white/10 text-white/70 hover:text-white"
            )}
            onClick={() => setScope('global')}
          >
            <Globe className="h-4 w-4 mr-2" />
            Global
          </Button>
        </div>
        
        <div className="flex space-x-2 text-sm">
          <button 
            className={cn(
              "px-3 py-1 rounded-full",
              period === 'week' 
                ? "bg-white/10 text-white" 
                : "text-white/50 hover:text-white"
            )}
            onClick={() => setPeriod('week')}
          >
            Week
          </button>
          <button 
            className={cn(
              "px-3 py-1 rounded-full",
              period === 'month' 
                ? "bg-white/10 text-white" 
                : "text-white/50 hover:text-white"
            )}
            onClick={() => setPeriod('month')}
          >
            Month
          </button>
          <button 
            className={cn(
              "px-3 py-1 rounded-full",
              period === 'year' 
                ? "bg-white/10 text-white" 
                : "text-white/50 hover:text-white"
            )}
            onClick={() => setPeriod('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <h3 className="font-medium">Impact Leaders</h3>
          <p className="text-sm text-white/60">Based on mCC earned</p>
        </div>
        
        <div className="divide-y divide-white/5">
          {data.map((user, index) => (
            <div 
              key={index} 
              className={cn(
                "flex items-center px-6 py-4 transition-colors",
                user.isYou ? "bg-yuzn-dark-lightest" : "hover:bg-white/5"
              )}
            >
              <div className="w-10 text-center font-medium text-white/70">
                {user.rank === 1 ? (
                  <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />
                ) : (
                  user.rank
                )}
              </div>
              
              <div className="flex-1 flex items-center ml-4">
                <div className="h-10 w-10 rounded-full bg-yuzn-dark-lightest flex items-center justify-center overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <User className="h-5 w-5 text-white/70" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={cn("font-medium", user.isYou && "text-yuzn-green")}>
                    {user.name} {user.isYou && "(You)"}
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="w-24 bg-white/10 rounded-full h-1.5 mr-2">
                      <div 
                        className="bg-gradient-to-r from-yuzn-green to-yuzn-blue h-full rounded-full"
                        style={{ width: `${(user.score / 1000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-white/70">{user.score} mCC</span>
                  </div>
                </div>
              </div>
              
              <div className={cn(
                "flex items-center text-sm",
                user.change > 0 ? "text-yuzn-green" : user.change < 0 ? "text-red-400" : "text-white/50"
              )}>
                {user.change > 0 && '↑'}
                {user.change < 0 && '↓'}
                {user.change === 0 && '–'}
                <span className="ml-1">
                  {user.change !== 0 && Math.abs(user.change)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
