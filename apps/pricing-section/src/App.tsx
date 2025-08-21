import { useState } from 'react';

import PlanCard from './components/plan-card';
import { planData } from './config/plan-data';
import { type Billing } from './types';

function App() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <main className="flex flex-col items-center">
      <span>Pricing Tiers</span>
      <span>Fit for all your needs</span>
      <p className="text-center">
        Pick the plan that suits you today and step up as your demands grow - our flexible options
        have your journey mapped out.
      </p>
      <div role="radio-group" aria-label="billing period">
        <label htmlFor="monthly">
          <input
            id="monthly"
            type="radio"
            name="billing"
            value="monthly"
            checked={billing === 'monthly'}
            onChange={() => setBilling('monthly')}
            className="sr-only"
          />
          Monthly
        </label>
        <label htmlFor="annual">
          <input
            id="annual"
            type="radio"
            name="billing"
            value="annual"
            checked={billing === 'annual'}
            onChange={() => setBilling('annual')}
            className="sr-only"
          />
          Annually
        </label>
      </div>

      <div className="flex flex-col">
        {planData.map((plan) => {
          return <PlanCard key={plan.name} plan={plan} billing={billing} />;
        })}
      </div>
    </main>
  );
}

export default App;
