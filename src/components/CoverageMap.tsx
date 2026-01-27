import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

// GeoJSON/TopoJSON Source
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Data Interfaces
interface ExportItem {
  name: string;
  pct: string;
}

interface ImportItem {
  name: string;
  pct: string;
}

interface TradeData {
  exports: ExportItem[];
  imports: ImportItem[];
}

interface AppStat {
  name: string;
  pct: string;
}

interface DigitalData {
  internetPenetration: string;
  socialPenetration: string;
  topSocial: AppStat;
  topMessenger: AppStat;
  mobileOperator: string;
}

interface RetailData {
  mcdonalds: string;
  starbucks: string;
  kfc: string;
  gasStations: string;
  topGasBrand: string;
}

interface AppsData {
  ecommerce: string;
  foodDelivery: string[];
}

interface CountryData {
  name: string;
  flagCode: string;
  pop: string;
  gdp: string;
  growth: number;
  inc: number | string; // monthly in USD
  rest: string; // restaurants
  hosp: string; // hospitals
  coordinates: [number, number];
  trade: TradeData;
  digital: DigitalData;
  retail: RetailData;
  apps: AppsData;
  unemployment: string;
  medianAge: string;
}

// Libralytic Coverage Data (2024/2025 Est.)
const coverageData: Record<string, CountryData> = {
  // --- SEA ---
  THA: {
    name: 'Thailand',
    flagCode: 'th',
    pop: '71.8M',
    gdp: '$558B',
    growth: 2.9,
    inc: 485,
    rest: '320,000+',
    hosp: '1,275',
    coordinates: [100.9925, 15.87],
    trade: {
      exports: [
        { name: 'Cars & Parts', pct: '14%' },
        { name: 'Computers', pct: '12%' },
        { name: 'Electronics', pct: '10%' },
      ],
      imports: [
        { name: 'Crude Oil', pct: '12%' },
        { name: 'Machinery', pct: '9%' },
        { name: 'Electrical', pct: '8%' },
      ],
    },
    digital: {
      internetPenetration: '88.0%',
      socialPenetration: '68.3%',
      topSocial: { name: 'Facebook', pct: '78%' },
      topMessenger: { name: 'LINE', pct: '95%' },
      mobileOperator: 'AIS',
    },
    retail: {
      mcdonalds: '230+',
      starbucks: '474',
      kfc: '1,042',
      gasStations: '26,000+',
      topGasBrand: 'PTT Station',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['GrabFood', 'LINE MAN', 'ShopeeFood'],
    },
    unemployment: '1.0%',
    medianAge: '40.1',
  },
  SGP: {
    name: 'Singapore',
    flagCode: 'sg',
    pop: '6.0M',
    gdp: '$574B',
    growth: 2.2,
    inc: 4074,
    rest: '98,000+',
    hosp: '31',
    coordinates: [103.8198, 1.3521],
    trade: {
      exports: [
        { name: 'Electronics', pct: '30%' },
        { name: 'Petroleum', pct: '15%' },
        { name: 'Machinery', pct: '14%' },
      ],
      imports: [
        { name: 'Machinery', pct: '25%' },
        { name: 'Mineral Fuels', pct: '20%' },
        { name: 'Electronics', pct: '18%' },
      ],
    },
    digital: {
      internetPenetration: '96.0%',
      socialPenetration: '88.2%',
      topSocial: { name: 'Facebook', pct: '73%' },
      topMessenger: { name: 'WhatsApp', pct: '90%' },
      mobileOperator: 'Singtel',
    },
    retail: {
      mcdonalds: '151',
      starbucks: '140+',
      kfc: '80+',
      gasStations: '180+',
      topGasBrand: 'Shell / Esso',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['GrabFood', 'Foodpanda', 'Deliveroo'],
    },
    unemployment: '1.9%',
    medianAge: '42.2',
  },
  JPN: {
    name: 'Japan',
    flagCode: 'jp',
    pop: '123M',
    gdp: '$4.28T',
    growth: 1.1,
    inc: 3106,
    rest: '909,000+',
    hosp: '8,372',
    coordinates: [138.2529, 36.2048],
    trade: {
      exports: [
        { name: 'Vehicles', pct: '20%' },
        { name: 'Machinery', pct: '18%' },
        { name: 'Electronics', pct: '14%' },
      ],
      imports: [
        { name: 'Mineral Fuels', pct: '23%' },
        { name: 'Electronics', pct: '12%' },
        { name: 'Machinery', pct: '9%' },
      ],
    },
    digital: {
      internetPenetration: '85.0%',
      socialPenetration: '78.6%',
      topSocial: { name: 'LINE', pct: '81%' },
      topMessenger: { name: 'LINE', pct: '92%' },
      mobileOperator: 'NTT Docomo',
    },
    retail: {
      mcdonalds: '3,000',
      starbucks: '1,733',
      kfc: '1,277',
      gasStations: '27,009',
      topGasBrand: 'ENEOS',
    },
    apps: {
      ecommerce: 'Amazon JP',
      foodDelivery: ['Uber Eats', 'Demae-can', 'Wolt'],
    },
    unemployment: '2.5%',
    medianAge: '48.6',
  },
  VNM: {
    name: 'Vietnam',
    flagCode: 'vn',
    pop: '100M',
    gdp: '$514B',
    growth: 6.5,
    inc: 235,
    rest: '323,000+',
    hosp: '1,645',
    coordinates: [108.2772, 14.0583],
    trade: {
      exports: [
        { name: 'Phones/Parts', pct: '18%' },
        { name: 'Electronics', pct: '15%' },
        { name: 'Textiles', pct: '12%' },
      ],
      imports: [
        { name: 'Electronics', pct: '25%' },
        { name: 'Machinery', pct: '10%' },
        { name: 'Fabrics', pct: '5%' },
      ],
    },
    digital: {
      internetPenetration: '79.1%',
      socialPenetration: '73.3%',
      topSocial: { name: 'Facebook', pct: '90%+' },
      topMessenger: { name: 'Zalo', pct: '85%' },
      mobileOperator: 'Viettel',
    },
    retail: {
      mcdonalds: '37',
      starbucks: '150',
      kfc: '172',
      gasStations: '11,000+',
      topGasBrand: 'Petrolimex',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['GrabFood', 'ShopeeFood', 'BeFood'],
    },
    unemployment: '2.3%',
    medianAge: '32.5',
  },
  IDN: {
    name: 'Indonesia',
    flagCode: 'id',
    pop: '284M',
    gdp: '$1.4T',
    growth: 5.0,
    inc: 188,
    rest: '1.2M+',
    hosp: '2,985',
    coordinates: [113.9213, -0.7893],
    trade: {
      exports: [
        { name: 'Coal', pct: '19%' },
        { name: 'Palm Oil', pct: '11%' },
        { name: 'Steel', pct: '9%' },
      ],
      imports: [
        { name: 'Petroleum', pct: '15%' },
        { name: 'Machinery', pct: '12%' },
        { name: 'Foodstuffs', pct: '7%' },
      ],
    },
    digital: {
      internetPenetration: '66.5%',
      socialPenetration: '50.2%',
      topSocial: { name: 'TikTok', pct: '69%' },
      topMessenger: { name: 'WhatsApp', pct: '65%' },
      mobileOperator: 'Telkomsel',
    },
    retail: {
      mcdonalds: '290+',
      starbucks: '603',
      kfc: '695',
      gasStations: '15,900+',
      topGasBrand: 'Pertamina',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['ShopeeFood', 'GoFood', 'GrabFood'],
    },
    unemployment: '5.3%',
    medianAge: '29.7',
  },
  MYS: {
    name: 'Malaysia',
    flagCode: 'my',
    pop: '34M',
    gdp: '$470B',
    growth: 4.6,
    inc: 670,
    rest: '136,000+',
    hosp: '348',
    coordinates: [101.9758, 4.2105],
    trade: {
      exports: [
        { name: 'Electronics', pct: '38%' },
        { name: 'Petroleum', pct: '15%' },
        { name: 'Palm Oil', pct: '6%' },
      ],
      imports: [
        { name: 'Electronics', pct: '30%' },
        { name: 'Petroleum', pct: '14%' },
        { name: 'Machinery', pct: '8%' },
      ],
    },
    digital: {
      internetPenetration: '98.0%',
      socialPenetration: '91.7%',
      topSocial: { name: 'Facebook', pct: '85%' },
      topMessenger: { name: 'WhatsApp', pct: '90%' },
      mobileOperator: 'CelcomDigi',
    },
    retail: {
      mcdonalds: '370+',
      starbucks: '408',
      kfc: '600+',
      gasStations: '4,200',
      topGasBrand: 'Petronas',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['GrabFood', 'Foodpanda', 'ShopeeFood'],
    },
    unemployment: '3.3%',
    medianAge: '30.3',
  },
  PHL: {
    name: 'Philippines',
    flagCode: 'ph',
    pop: '115M',
    gdp: '$497B',
    growth: 5.5,
    inc: 390,
    rest: '33,000+',
    hosp: '1,351',
    coordinates: [121.774, 12.8797],
    trade: {
      exports: [
        { name: 'Electronics', pct: '58%' },
        { name: 'Machinery', pct: '6%' },
        { name: 'Ores/Slag', pct: '4%' },
      ],
      imports: [
        { name: 'Electronics', pct: '25%' },
        { name: 'Fuels', pct: '18%' },
        { name: 'Transport', pct: '9%' },
      ],
    },
    digital: {
      internetPenetration: '73.6%',
      socialPenetration: '73.4%',
      topSocial: { name: 'Facebook', pct: '95%' },
      topMessenger: { name: 'Messenger', pct: '95%' },
      mobileOperator: 'Globe',
    },
    retail: {
      mcdonalds: '740',
      starbucks: '447',
      kfc: '400+',
      gasStations: '10,000+',
      topGasBrand: 'Petron',
    },
    apps: {
      ecommerce: 'Shopee',
      foodDelivery: ['GrabFood', 'Foodpanda', 'Pick.A.Roo'],
    },
    unemployment: '4.5%',
    medianAge: '25.7',
  },
  TWN: {
    name: 'Taiwan',
    flagCode: 'tw',
    pop: '23.4M',
    gdp: '$850B',
    growth: 3.1,
    inc: 1420,
    rest: '179,000+',
    hosp: '476',
    coordinates: [121.5654, 25.033],
    trade: {
      exports: [
        { name: 'Electronics', pct: '40%' },
        { name: 'ICT', pct: '15%' },
        { name: 'Metals', pct: '8%' },
      ],
      imports: [
        { name: 'Electronics', pct: '30%' },
        { name: 'Minerals', pct: '15%' },
        { name: 'Machinery', pct: '12%' },
      ],
    },
    digital: {
      internetPenetration: '90.7%',
      socialPenetration: '89.0%',
      topSocial: { name: 'LINE', pct: '91%' },
      topMessenger: { name: 'LINE', pct: '90%' },
      mobileOperator: 'Chunghwa',
    },
    retail: {
      mcdonalds: '400+',
      starbucks: '560+',
      kfc: '180+',
      gasStations: '2,500+',
      topGasBrand: 'CPC',
    },
    apps: {
      ecommerce: 'Shopee TW',
      foodDelivery: ['Uber Eats', 'Foodpanda', 'Lalamove'],
    },
    unemployment: '3.4%',
    medianAge: '42.5',
  },
  KHM: {
    name: 'Cambodia',
    flagCode: 'kh',
    pop: '17M',
    gdp: '$50B',
    growth: 4.8,
    inc: 200,
    rest: '5,000+',
    hosp: '150+',
    coordinates: [104.991, 12.5657],
    trade: {
      exports: [
        { name: 'Garments', pct: '52%' },
        { name: 'Travel Goods', pct: '10%' },
        { name: 'Footwear', pct: '8%' },
      ],
      imports: [
        { name: 'Fabrics', pct: '20%' },
        { name: 'Fuel', pct: '15%' },
        { name: 'Vehicles', pct: '8%' },
      ],
    },
    digital: {
      internetPenetration: '56.7%',
      socialPenetration: '65%',
      topSocial: { name: 'Facebook', pct: '80%+' },
      topMessenger: { name: 'Telegram', pct: 'High' },
      mobileOperator: 'Metfone',
    },
    retail: {
      mcdonalds: '0',
      starbucks: '30+',
      kfc: '10+',
      gasStations: '4,000+',
      topGasBrand: 'Tela / PTT',
    },
    apps: {
      ecommerce: 'WOWNOW',
      foodDelivery: ['NHAM24', 'WOWNOW', 'Foodpanda'],
    },
    unemployment: '0.6%',
    medianAge: '25.6',
  },
  LAO: {
    name: 'Laos',
    flagCode: 'la',
    pop: '8M',
    gdp: '$17B',
    growth: 4.0,
    inc: 140,
    rest: '2,000+',
    hosp: '80+',
    coordinates: [102.4955, 19.8563],
    trade: {
      exports: [
        { name: 'Electricity', pct: '20%' },
        { name: 'Minerals', pct: '15%' },
        { name: 'Rubber', pct: '8%' },
      ],
      imports: [
        { name: 'Fuel', pct: '25%' },
        { name: 'Vehicles', pct: '12%' },
        { name: 'Machinery', pct: '10%' },
      ],
    },
    digital: {
      internetPenetration: '66.2%',
      socialPenetration: '50%',
      topSocial: { name: 'Facebook', pct: '85%' },
      topMessenger: { name: 'WhatsApp', pct: '50%' },
      mobileOperator: 'Unitel',
    },
    retail: {
      mcdonalds: '0',
      starbucks: '2',
      kfc: '5+',
      gasStations: '200+',
      topGasBrand: 'PetroTrade',
    },
    apps: {
      ecommerce: 'Lazada',
      foodDelivery: ['Foodpanda', 'E-Gets', 'Sokxay'],
    },
    unemployment: '2.4%',
    medianAge: '24.4',
  },
  MMR: {
    name: 'Myanmar',
    flagCode: 'mm',
    pop: '55M',
    gdp: '$60B',
    growth: -2.7,
    inc: 200,
    rest: 'N/A',
    hosp: 'N/A',
    coordinates: [95.956, 21.9162],
    trade: {
      exports: [
        { name: 'Nat. Gas', pct: '30%' },
        { name: 'Garments', pct: '20%' },
        { name: 'Rice', pct: '10%' },
      ],
      imports: [
        { name: 'Refined Oil', pct: '25%' },
        { name: 'Fabrics', pct: '10%' },
        { name: 'Vehicles', pct: '5%' },
      ],
    },
    digital: {
      internetPenetration: '44.0%',
      socialPenetration: '35%',
      topSocial: { name: 'Facebook', pct: '90%+' },
      topMessenger: { name: 'Viber', pct: 'Popular' },
      mobileOperator: 'MPT',
    },
    retail: {
      mcdonalds: '0',
      starbucks: '0',
      kfc: '20+',
      gasStations: '2,200+',
      topGasBrand: 'Denko',
    },
    apps: {
      ecommerce: 'Shop.com.mm',
      foodDelivery: ['Foodpanda', 'GrabFood'],
    },
    unemployment: 'N/A',
    medianAge: '29.0',
  },

  // --- NEW MARKETS ---
  USA: {
    name: 'United States',
    flagCode: 'us',
    pop: '347M',
    gdp: '$28T',
    growth: 2.0,
    inc: '5,500+',
    rest: '700,000+',
    hosp: '6,100+',
    coordinates: [-95.7129, 37.0902],
    trade: {
      exports: [
        { name: 'Refined Fuel', pct: '12%' },
        { name: 'Crude Oil', pct: '9%' },
        { name: 'Gas', pct: '5%' },
      ],
      imports: [
        { name: 'Cars', pct: '8%' },
        { name: 'Crude Oil', pct: '6%' },
        { name: 'Computers', pct: '5%' },
      ],
    },
    digital: {
      internetPenetration: '97.1%',
      socialPenetration: '74%',
      topSocial: { name: 'YouTube', pct: '84%' },
      topMessenger: { name: 'Messenger', pct: '55%' },
      mobileOperator: 'T-Mobile',
    },
    retail: {
      mcdonalds: '13,557',
      starbucks: '16,941',
      kfc: '3,711',
      gasStations: '121,000+',
      topGasBrand: 'Shell',
    },
    apps: {
      ecommerce: 'Amazon',
      foodDelivery: ['DoorDash', 'Uber Eats', 'Grubhub'],
    },
    unemployment: '4.1%',
    medianAge: '38.9',
  },
  CHN: {
    name: 'China',
    flagCode: 'cn',
    pop: '1.4B',
    gdp: '$19T',
    growth: 5.0,
    inc: '1,690',
    rest: '9M+',
    hosp: '37,000+',
    coordinates: [104.1954, 35.8617],
    trade: {
      exports: [
        { name: 'Electronics', pct: '28%' },
        { name: 'Machinery', pct: '17%' },
        { name: 'Vehicles', pct: '5%' },
      ],
      imports: [
        { name: 'Electronics', pct: '25%' },
        { name: 'Crude Oil', pct: '15%' },
        { name: 'Ores', pct: '8%' },
      ],
    },
    digital: {
      internetPenetration: '78.6%',
      socialPenetration: '76.5%',
      topSocial: { name: 'WeChat', pct: '90%+' },
      topMessenger: { name: 'WeChat', pct: '90%+' },
      mobileOperator: 'ChinaMobile',
    },
    retail: {
      mcdonalds: '6,820',
      starbucks: '7,596',
      kfc: '11,648',
      gasStations: '115,000+',
      topGasBrand: 'Sinopec',
    },
    apps: {
      ecommerce: 'Taobao/Tmall',
      foodDelivery: ['Meituan', 'Ele.me'],
    },
    unemployment: '5.0%',
    medianAge: '39.0',
  },
  IND: {
    name: 'India',
    flagCode: 'in',
    pop: '1.46B',
    gdp: '$4.1T',
    growth: 7.3,
    inc: '230',
    rest: '30M+', // Unorganized sector vast
    hosp: '69,000+',
    coordinates: [78.9629, 20.5937],
    trade: {
      exports: [
        { name: 'Refined Oil', pct: '18%' },
        { name: 'Gems', pct: '8%' },
        { name: 'Pharma', pct: '5%' },
      ],
      imports: [
        { name: 'Crude Oil', pct: '25%' },
        { name: 'Coal', pct: '8%' },
        { name: 'Gold', pct: '6%' },
      ],
    },
    digital: {
      internetPenetration: '55.0%+',
      socialPenetration: '33.7%',
      topSocial: { name: 'WhatsApp', pct: '80%+' },
      topMessenger: { name: 'WhatsApp', pct: '84%' },
      mobileOperator: 'Jio',
    },
    retail: {
      mcdonalds: '665',
      starbucks: '487',
      kfc: '700+',
      gasStations: '100,000+',
      topGasBrand: 'Indian Oil',
    },
    apps: {
      ecommerce: 'Flipkart',
      foodDelivery: ['Swiggy', 'Zomato'],
    },
    unemployment: '7.8%',
    medianAge: '28.7',
  },
  AUS: {
    name: 'Australia',
    flagCode: 'au',
    pop: '27M',
    gdp: '$1.7T',
    growth: 1.6,
    inc: '5,000+',
    rest: '85,000+',
    hosp: '1,350',
    coordinates: [133.7751, -25.2744],
    trade: {
      exports: [
        { name: 'Iron Ore', pct: '30%' },
        { name: 'Coal', pct: '18%' },
        { name: 'Gas', pct: '15%' },
      ],
      imports: [
        { name: 'Refined Fuel', pct: '9%' },
        { name: 'Vehicles', pct: '8%' },
        { name: 'Telecom', pct: '4%' },
      ],
    },
    digital: {
      internetPenetration: '95.0%',
      socialPenetration: '77.9%',
      topSocial: { name: 'Facebook', pct: '78%' },
      topMessenger: { name: 'Messenger', pct: '69%' },
      mobileOperator: 'Telstra',
    },
    retail: {
      mcdonalds: '1,068',
      starbucks: '72',
      kfc: '804',
      gasStations: '7,000+',
      topGasBrand: 'Ampol',
    },
    apps: {
      ecommerce: 'Amazon AU',
      foodDelivery: ['Uber Eats', 'DoorDash', 'Menulog'],
    },
    unemployment: '3.9%',
    medianAge: '37.5',
  },
  RUS: {
    name: 'Russia',
    flagCode: 'ru',
    pop: '144M',
    gdp: '$2.0T',
    growth: 1.5,
    inc: '800+',
    rest: '100,000+',
    hosp: '5,300+',
    coordinates: [105.3188, 61.524],
    trade: {
      exports: [
        { name: 'Crude Oil', pct: '25%' },
        { name: 'Refined Oil', pct: '15%' },
        { name: 'Gas', pct: '10%' },
      ],
      imports: [
        { name: 'Machinery', pct: '20%' },
        { name: 'Vehicles', pct: '10%' },
        { name: 'Pharma', pct: '5%' },
      ],
    },
    digital: {
      internetPenetration: '90.4%',
      socialPenetration: '73.4%',
      topSocial: { name: 'VK', pct: 'Top' },
      topMessenger: { name: 'WhatsApp', pct: '72%' },
      mobileOperator: 'MTS',
    },
    retail: {
      mcdonalds: '0 (Exited)',
      starbucks: '0 (Exited)',
      kfc: '0 (Exited)',
      gasStations: '29,000+',
      topGasBrand: 'Rosneft',
    },
    apps: {
      ecommerce: 'Wildberries',
      foodDelivery: ['Yandex Eats', 'Samokat', 'Delivery Club'],
    },
    unemployment: '2.9%',
    medianAge: '40.3',
  },
};

// Map ISO Numeric (from topology) to our Alpha-3 keys
const numericCodeMap: Record<string, string> = {
  '764': 'THA', // Thailand
  '702': 'SGP', // Singapore
  '392': 'JPN', // Japan
  '704': 'VNM', // Vietnam
  '360': 'IDN', // Indonesia
  '458': 'MYS', // Malaysia
  '608': 'PHL', // Philippines
  '116': 'KHM', // Cambodia
  '418': 'LAO', // Laos
  '104': 'MMR', // Myanmar
  '158': 'TWN', // Taiwan
  '840': 'USA', // United States
  '156': 'CHN', // China
  '356': 'IND', // India
  '036': 'AUS', // Australia
  '643': 'RUS', // Russia
};

const StatRow = ({ label, value, icon, color = 'text-gray-200' }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2 text-gray-400">
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    <span className={`font-mono font-bold ${color} text-right text-sm`}>
      {value}
    </span>
  </div>
);

type CategoryType = 'general' | 'trade' | 'digital' | 'retail' | 'apps';

const CoverageMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<CategoryType>('general');

  const categories = [
    { id: 'general', label: 'Overview', icon: '🌍' },
    { id: 'trade', label: 'Trade & Econ', icon: '⚖️' },
    { id: 'digital', label: 'Digital', icon: '📱' },
    { id: 'apps', label: 'Top Apps', icon: '📲' },
    { id: 'retail', label: 'Retail', icon: '🛍️' },
  ];

  return (
    <div className="relative h-[800px] w-full overflow-hidden rounded-3xl bg-[#1e1e2e] shadow-2xl">
      {/* Header / Brand Overlay */}
      <div className="pointer-events-none absolute top-8 left-8 z-10 flex flex-col items-start">
        <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
          Libralytic <span className="text-indigo-400">Coverage</span>
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Interactive Market Intelligence Map
        </p>
      </div>

      {/* Category Switcher - moved down and made pointer-events-auto */}
      <div className="pointer-events-auto absolute top-28 left-8 z-10 flex flex-col space-y-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as CategoryType)}
            className={`flex w-40 items-center space-x-3 rounded-lg px-4 py-2 text-left text-sm font-semibold shadow-md transition-all ${
              activeCategory === cat.id
                ? 'scale-105 bg-indigo-600 text-white ring-1 ring-indigo-400'
                : 'bg-[#2d2d44]/90 text-gray-400 backdrop-blur-sm hover:bg-[#3f3f56] hover:text-white'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140, // Zoom out to see global (USA/RUS/AUS)
          center: [100, 20], // Center more globally roughly
        }}
        className="h-full w-full bg-[#1e1e2e]"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // Lookup Alpha-3 key from numeric ID
                const alpha3Key = numericCodeMap[geo.id] || '';
                const isCovered = coverageData[alpha3Key];

                // Styles based on coverage status (Uni-color, professional)
                const baseFill = isCovered ? '#4f46e5' : '#2d2d44'; // Indigo-600 vs Dark Slate
                const hoverFill = isCovered ? '#818cf8' : '#3f3f56'; // Indigo-400 (lighter) on hover

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (isCovered) setSelectedCountry(isCovered);
                    }}
                    onMouseLeave={() => {
                      // Optional: keep selection sticky
                    }}
                    onClick={() => {
                      if (isCovered) setSelectedCountry(isCovered);
                    }}
                    style={{
                      default: {
                        fill: baseFill,
                        outline: 'none',
                        stroke: '#1e1e2e',
                        strokeWidth: 0.5,
                        transition: 'all 250ms',
                      },
                      hover: {
                        fill: hoverFill,
                        outline: 'none',
                        cursor: isCovered ? 'pointer' : 'default',
                        filter: isCovered
                          ? 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))'
                          : 'none',
                      },
                      pressed: {
                        fill: '#4338ca', // Indigo-700
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Markers / Pulsing Capitals */}
          {Object.entries(coverageData).map(([code, data]) => (
            <Marker key={code} coordinates={data.coordinates}>
              {/* Outer Pulse */}
              <motion.circle
                r={4} // Smaller radius for global view
                fill="#6366f1"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 2.5 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* Core Dot */}
              <circle r={2} fill="#fff" className="drop-shadow-md" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Data Card Overlay - Positioned explicitly to avoid crossover */}
      <AnimatePresence mode="wait">
        {selectedCountry && (
          <motion.div
            key={selectedCountry.name + activeCategory} // re-animate on change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-8 right-8 z-20 w-80 overflow-hidden rounded-2xl border border-indigo-500/30 bg-[#161622]/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Card Header Background */}
            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            <div className="p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://flagcdn.com/w80/${selectedCountry.flagCode}.png`}
                      alt={selectedCountry.name}
                      className="h-8 w-auto rounded shadow-sm"
                    />
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {selectedCountry.name}
                    </h2>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-indigo-400">
                    {categories.find((c) => c.id === activeCategory)?.label}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/20 text-xl">
                  {selectedCountry.coordinates[1] > 20 ? '🏯' : '🌴'}
                </div>
              </div>

              {/* Dynamic Content Based on Category */}
              <div className="space-y-4">
                {activeCategory === 'general' && (
                  <>
                    <StatRow
                      label="Population"
                      value={selectedCountry.pop}
                      icon="👥"
                      color="text-white"
                    />
                    <StatRow
                      label="GDP (Nominal)"
                      value={selectedCountry.gdp}
                      icon="💰"
                      color="text-yellow-400"
                    />
                    <StatRow
                      label="GDP Growth"
                      value={`${selectedCountry.growth}%`}
                      icon="📈"
                      color={
                        selectedCountry.growth > 0
                          ? 'text-emerald-400'
                          : 'text-rose-400'
                      }
                    />
                    <StatRow
                      label="Avg. Income"
                      value={`$${selectedCountry.inc}`}
                      icon="💵"
                      color="text-blue-300"
                    />
                    <div className="my-2 border-t border-white/10 pt-2">
                      <StatRow
                        label="Unemployment"
                        value={selectedCountry.unemployment}
                        icon="📉"
                        color="text-gray-300"
                      />
                      <StatRow
                        label="Median Age"
                        value={selectedCountry.medianAge}
                        icon="🎂"
                        color="text-gray-300"
                      />
                    </div>
                  </>
                )}

                {activeCategory === 'trade' && (
                  <>
                    <div className="rounded-xl bg-[#232334] p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Top Exports
                      </p>
                      <div className="space-y-2">
                        {selectedCountry.trade.exports.map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-300">{item.name}</span>
                            <span className="font-mono font-bold text-white">
                              {item.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#232334] p-3">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
                        Top Imports
                      </p>
                      <div className="space-y-2">
                        {selectedCountry.trade.imports.map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-300">{item.name}</span>
                            <span className="font-mono font-bold text-white">
                              {item.pct}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeCategory === 'digital' && (
                  <>
                    <div className="mb-2 grid grid-cols-2 gap-3">
                      <StatRow
                        label="Internet"
                        value={selectedCountry.digital.internetPenetration}
                        icon="🌐"
                        color="text-cyan-400"
                      />
                      <StatRow
                        label="Social"
                        value={selectedCountry.digital.socialPenetration}
                        icon="👥"
                        color="text-indigo-300"
                      />
                    </div>
                    <div className="my-2 h-px bg-white/10" />

                    <div className="mb-2 rounded-xl bg-[#232334] p-3">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          Top Social App
                        </span>
                        <span className="text-xs font-bold text-blue-400">
                          {selectedCountry.digital.topSocial.pct}
                        </span>
                      </div>
                      <div className="mb-2 text-sm font-bold text-white">
                        {selectedCountry.digital.topSocial.name}
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
                        <div className="h-full w-3/4 bg-blue-500"></div>
                      </div>
                    </div>

                    <div className="mb-2 rounded-xl bg-[#232334] p-3">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          Top Messenger
                        </span>
                        <span className="text-xs font-bold text-green-400">
                          {selectedCountry.digital.topMessenger.pct}
                        </span>
                      </div>
                      <div className="mb-2 text-sm font-bold text-white">
                        {selectedCountry.digital.topMessenger.name}
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
                        <div className="h-full w-3/4 bg-green-500"></div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between rounded-lg border border-white/5 bg-[#2d2d44] p-2 px-3">
                      <span className="text-xs text-gray-400">
                        Top Signal Provider
                      </span>
                      <span className="text-sm font-bold text-white">
                        {selectedCountry.digital.mobileOperator}
                      </span>
                    </div>
                  </>
                )}

                {activeCategory === 'apps' && (
                  <>
                    <div className="mb-3 rounded-xl bg-[#232334] p-4 text-center">
                      <div className="mb-1 text-2xl">🛒</div>
                      <p className="mb-1 text-xs uppercase tracking-wide text-gray-400">
                        Top E-Commerce App
                      </p>
                      <p className="text-lg font-bold text-white">
                        {selectedCountry.apps.ecommerce}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#232334] p-4">
                      <div className="mb-3 flex items-center space-x-2">
                        <span className="text-lg">🛵</span>
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Top Food Delivery
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {selectedCountry.apps.foodDelivery.map((app, i) => (
                          <li
                            key={i}
                            className="flex items-center justify-between rounded bg-white/5 p-2"
                          >
                            <span className="text-sm font-medium text-white">
                              {app}
                            </span>
                            <span className="text-xs text-indigo-400">
                              #{i + 1}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {activeCategory === 'retail' && (
                  <>
                    <p className="mb-2 text-xs text-gray-400">
                      Global Brand Presence
                    </p>
                    <StatRow
                      label="McDonald's"
                      value={selectedCountry.retail.mcdonalds}
                      icon="🍔"
                      color="text-yellow-400"
                    />
                    <StatRow
                      label="Starbucks"
                      value={selectedCountry.retail.starbucks}
                      icon="☕"
                      color="text-emerald-400"
                    />
                    <StatRow
                      label="KFC"
                      value={selectedCountry.retail.kfc}
                      icon="🍗"
                      color="text-red-400"
                    />

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="mb-2 text-xs text-gray-400">
                        Energy Retail
                      </p>
                      <StatRow
                        label="Gas Stations"
                        value={selectedCountry.retail.gasStations}
                        icon="⛽"
                        color="text-orange-400"
                      />
                      <div className="mt-2 flex items-center justify-between rounded bg-white/5 p-2 px-3">
                        <span className="text-xs text-gray-400">Top Brand</span>
                        <span className="text-sm font-bold text-white">
                          {selectedCountry.retail.topGasBrand}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-6 font-mono text-[10px] text-gray-600">
        DATA SOURCE: WORLD BANK / IMF / LOCAL STATS (2025 PROJECTIONS)
      </div>
    </div>
  );
};

export default CoverageMap;
