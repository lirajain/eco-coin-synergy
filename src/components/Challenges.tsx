
import { useState, useEffect } from "react";
import { Play, Check, Clock, Lightbulb, Zap, Award, Bike, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  reward: number;
  difficulty: 'easy' | 'medium' | 'hard';
  daysLeft: number;
  progress: number;
  isCompleted: boolean;
  isAI: boolean;
}

const challenges: Challenge[] = [
  {
    id: 'c1',
    title: 'Cycle to Work Week',
    description: 'Use a bicycle instead of a car for your commute for 5 days',
    icon: Bike,
    reward: 10,
    difficulty: 'medium',
    daysLeft: 3,
    progress: 40,
    isCompleted: false,
    isAI: true
  },
  {
    id: 'c2',
    title: 'Zero Waste Lunch',
    description: 'Bring your own containers and utensils for takeout for 7 days',
    icon: Coffee,
    reward: 5,
    difficulty: 'easy',
    daysLeft: 5,
    progress: 30,
    isCompleted: false,
    isAI: false
  },
  {
    id: 'c3',
    title: 'Energy Saver',
    description: 'Reduce your daily electricity usage by 20% for a week',
    icon: Lightbulb,
    reward: 8,
    difficulty: 'medium',
    daysLeft: 2,
    progress: 65,
    isCompleted: false,
    isAI: false
  },
  {
    id: 'c4',
    title: 'Plant-Based Days',
    description: 'Eat only plant-based meals for 3 days',
    icon: Zap,
    reward: 7,
    difficulty: 'easy',
    daysLeft: 0,
    progress: 100,
    isCompleted: true,
    isAI: true
  }
];

const Challenges = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'completed'>('all');
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(challenges);
  
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredChallenges(challenges);
    } else if (activeTab === 'ai') {
      setFilteredChallenges(challenges.filter(c => c.isAI));
    } else {
      setFilteredChallenges(challenges.filter(c => c.isCompleted));
    }
  }, [activeTab]);
  
  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-yuzn-green bg-yuzn-green/10';
      case 'medium': return 'text-yuzn-blue bg-yuzn-blue/10';
      case 'hard': return 'text-purple-400 bg-purple-400/10';
      default: return 'text-white/70 bg-white/10';
    }
  };
  
  return (
    <div className="w-full">
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full border whitespace-nowrap",
            activeTab === 'all' 
              ? "bg-white/10 border-white/20 text-white" 
              : "bg-transparent border-white/10 text-white/70 hover:text-white"
          )}
          onClick={() => setActiveTab('all')}
        >
          All Challenges
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full border whitespace-nowrap",
            activeTab === 'ai' 
              ? "bg-yuzn-blue/10 border-yuzn-blue/20 text-yuzn-blue" 
              : "bg-transparent border-white/10 text-white/70 hover:text-white"
          )}
          onClick={() => setActiveTab('ai')}
        >
          <Zap className="h-4 w-4 mr-2" />
          AI Suggestions
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "rounded-full border whitespace-nowrap",
            activeTab === 'completed' 
              ? "bg-yuzn-green/10 border-yuzn-green/20 text-yuzn-green" 
              : "bg-transparent border-white/10 text-white/70 hover:text-white"
          )}
          onClick={() => setActiveTab('completed')}
        >
          <Check className="h-4 w-4 mr-2" />
          Completed
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredChallenges.map((challenge, index) => (
          <div 
            key={challenge.id} 
            className={cn(
              "glass-card rounded-xl overflow-hidden transition-all hover:translate-y-[-5px] animate-fade-in",
              challenge.isAI && "blue-glow",
              challenge.isCompleted && "green-glow"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-5 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center">
                <div className={cn(
                  "p-2 rounded-full mr-3",
                  challenge.isAI ? "bg-yuzn-blue/10" : "bg-white/10"
                )}>
                  <challenge.icon className={cn(
                    "h-5 w-5",
                    challenge.isAI ? "text-yuzn-blue" : "text-white"
                  )} />
                </div>
                <h3 className="font-medium">{challenge.title}</h3>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-yuzn-green mr-1" />
                <span className="text-sm text-yuzn-green">{challenge.reward} mCC</span>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-white/70 text-sm mb-4">{challenge.description}</p>
              
              <div className="flex justify-between items-center mb-2">
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  getDifficultyColor(challenge.difficulty)
                )}>
                  {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                </span>
                
                {challenge.isAI && (
                  <span className="text-xs bg-yuzn-blue/10 text-yuzn-blue px-2 py-1 rounded-full flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    AI Suggested
                  </span>
                )}
                
                {!challenge.isCompleted && challenge.daysLeft > 0 && (
                  <span className="text-xs text-white/60 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {challenge.daysLeft} days left
                  </span>
                )}
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>Progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <Progress 
                  value={challenge.progress} 
                  className="h-2 bg-white/10" 
                  indicatorClassName={cn(
                    challenge.isCompleted 
                      ? "bg-gradient-to-r from-yuzn-green to-yuzn-green-light" 
                      : "bg-gradient-to-r from-yuzn-blue to-yuzn-green"
                  )}
                />
              </div>
              
              <div className="mt-4">
                {challenge.isCompleted ? (
                  <Button variant="outline" className="w-full border-yuzn-green/30 bg-yuzn-green/10 text-yuzn-green">
                    <Check className="h-4 w-4 mr-2" />
                    Completed
                  </Button>
                ) : (
                  <Button variant={challenge.isAI ? "default" : "outline"} className={cn(
                    "w-full",
                    challenge.isAI 
                      ? "bg-yuzn-blue hover:bg-yuzn-blue-dark text-white" 
                      : "border-white/10 bg-white/5 hover:bg-white/10 text-white"
                  )}>
                    <Play className="h-4 w-4 mr-2" />
                    {challenge.progress > 0 ? "Continue" : "Start Challenge"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
