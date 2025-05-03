
import React from 'react';
import { 
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import { ChartArea } from 'lucide-react';

const productionData = [
  { district: 'Nagapattinam', production: 42000, farms: 520 },
  { district: 'Ramanathapuram', production: 38000, farms: 480 },
  { district: 'Thoothukudi', production: 35000, farms: 410 },
  { district: 'Cuddalore', production: 30000, farms: 350 },
  { district: 'Thanjavur', production: 25000, farms: 280 },
  { district: 'Other Districts', production: 50000, farms: 640 },
];

const COLORS = ['#0EA5E9', '#0B7DB5', '#086993', '#055370', '#033F54', '#001845'];

const ProductionSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-ocean-dark to-ocean-deepest">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-prawn">Vanamei</span> Production in Tamil Nadu
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Tamil Nadu is one of the leading states in vanamei shrimp production with advanced farming practices and ideal coastal conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <ChartArea className="text-prawn" />
              District-wise Production (Tonnes/Year)
            </h3>
            <div className="h-80">
              <ChartContainer
                config={{
                  production: {
                    label: "Production (Tonnes)",
                    theme: {
                      light: "#F97316",
                      dark: "#F97316"
                    }
                  }
                }}
              >
                <BarChart
                  data={productionData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis 
                    dataKey="district"
                    stroke="#f8fafc" 
                    tick={{ fill: '#f8fafc' }}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis 
                    stroke="#f8fafc"
                    tick={{ fill: '#f8fafc' }}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Bar 
                    dataKey="production" 
                    name="production"
                    radius={[4, 4, 0, 0]}
                  >
                    {productionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold text-white mb-4">Key Production Facts</h3>

            <div className="space-y-6">
              <div className="bg-ocean-deepest bg-opacity-30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">Total Production</span>
                  <span className="text-white font-semibold">220,000 Tonnes</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-prawn h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="bg-ocean-deepest bg-opacity-30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">Export Value</span>
                  <span className="text-white font-semibold">₹12,500 Cr</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-prawn h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="bg-ocean-deepest bg-opacity-30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">Farming Area</span>
                  <span className="text-white font-semibold">45,000 Hectares</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-prawn h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="bg-ocean-deepest bg-opacity-30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">Farmers</span>
                  <span className="text-white font-semibold">25,000+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-prawn h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 border border-ocean border-opacity-30 rounded-lg">
              <p className="text-white text-sm">
                Tamil Nadu contributes approximately 30% of India's total vanamei production, with continuous growth expected in the coming years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
