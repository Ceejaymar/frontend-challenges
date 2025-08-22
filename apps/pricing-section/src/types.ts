export type Billing = 'monthly' | 'annual';

export type Plan = {
  name: string;
  description: string;
  price: number;
  annualDiscount: number;
  features: string[];
  isPopular: boolean;
};
