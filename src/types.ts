export type ActiveTab = 'home' | 'services' | 'gallery' | 'facility' | 'inquiry';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ppf' | 'coating' | 'aero' | 'correction';
  description: string;
  badge: string;
  specs: string[];
  image: string;
  estimatedTime: string;
  startingPrice: string;
  features: string[];
}

export interface BuildProject {
  id: string;
  title: string;
  clientModel: string;
  year: string;
  category: 'bodykits' | 'ppf' | 'finishes' | 'motorsport';
  categoryLabel: string;
  tag: string;
  image: string;
  gallery: string[];
  description: string;
  specs: {
    service: string;
    filmThickness: string;
    warranty: string;
    turnaround: string;
    location: string;
  };
  beforeAfterImage?: {
    before: string;
    after: string;
  };
}

export interface BuildConfiguration {
  vehicleType: 'sedan' | 'suv' | 'supercar' | 'truck';
  makeModel: string;
  primaryService: string;
  finishType: string;
  additionalAddons: string[];
  estimatedCost: number;
  estimatedDays: number;
}

export interface InquiryFormData {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  vehicleMakeModel: string;
  vehicleYear: string;
  services: string[];
  projectVision: string;
  preferredDate: string;
}
