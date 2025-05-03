
import React from 'react';
import { 
  ChartContainer,
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import { ArrowUp, ChartLine } from 'lucide-react';

const growthData = [
  { stage: 'PL10', days: 10, weight: 0.001, survival: 100 },
  { stage: 'PL20', days: 20, weight: 0.01, survival: 95 },
  { stage: 'Juvenile', days: 40, weight: 2, survival: 90 },
  { stage: 'Adult', days: 80, weight: 12, survival: 85 },
  { stage: 'Harvest', days: 120, weight: 25, survival: 80 },
];

const GrowthCycleSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-ocean-dark bg-opacity-90 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">Growth Cycle of <span className="text-prawn">Vanamei Prawns</span></h2>
        <p className="text-white text-lg mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Vanamei prawns (Litopenaeus vannamei) have a rapid growth cycle, making them ideal for aquaculture. 
          From post-larvae to harvest-ready adults in just 3-4 months.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <ChartLine className="text-prawn" />
              Growth Chart
            </h3>
            <div className="h-80">
              <ChartContainer
                config={{
                  weight: {
                    label: "Weight (g)",
                    theme: {
                      light: "#F97316",
                      dark: "#F97316"
                    }
                  },
                  survival: {
                    label: "Survival Rate (%)",
                    theme: {
                      light: "#0EA5E9",
                      dark: "#0EA5E9"
                    }
                  }
                }}
              >
                <AreaChart
                  data={growthData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F97316" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="colorSurvival" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="stage" 
                    stroke="#f8fafc" 
                    tick={{ fill: '#f8fafc' }}
                  />
                  <YAxis 
                    stroke="#f8fafc"
                    tick={{ fill: '#f8fafc' }}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="weight" 
                    name="weight" 
                    stroke="#F97316" 
                    fillOpacity={1} 
                    fill="url(#colorWeight)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="survival" 
                    name="survival" 
                    stroke="#0EA5E9" 
                    fillOpacity={1} 
                    fill="url(#colorSurvival)" 
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
          
          <div className="text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-4">Key Growth Stages</h3>
            <div className="space-y-6">
              {[
                {
                  stage: 'Post-Larvae (PL)',
                  description: 'After 10-12 days in hatchery, PL are transferred to nursery ponds for acclimation.',
                  icon: <div className="w-12 h-12 rounded-full bg-prawn-light flex items-center justify-center">PL</div>
                },
                {
                  stage: 'Juvenile Stage',
                  description: 'From day 20-40, prawns develop rapidly and require high protein diet.',
                  icon: <div className="w-12 h-12 rounded-full bg-prawn flex items-center justify-center">J</div>
                },
                {
                  stage: 'Growth Phase',
                  description: 'Between 40-100 days, prawns grow exponentially with proper feeding.',
                  icon: <div className="w-12 h-12 rounded-full bg-ocean flex items-center justify-center text-white"><ArrowUp /></div>
                },
                {
                  stage: 'Harvest',
                  description: 'After 120 days, prawns reach 20-30g and are ready for harvest.',
                  icon: <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center">H</div>
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-xl font-medium mb-1">{item.stage}</h4>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthCycleSection;
