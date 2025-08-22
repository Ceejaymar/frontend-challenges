import { useState } from 'react';

import PlanCard from './components/plan-card';
import { planData } from './config/plan-data';
import { type Billing } from './types';

function App() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <main className="flex flex-col items-center py-12 px-3 gap-5 md:gap-7">
      <span className="text-indigo-700 font-semibold md:text-xl">Pricing Tiers</span>
      <span className="font-semibold text-3xl text-neutral-900 md:text-5xl">
        Fit for all your needs
      </span>
      <p className="text-center text-lg text-neutral-600 md:text-xl md:max-w-140">
        Pick the plan that suits you today and step up as your demands grow - our flexible options
        have your journey mapped out.
      </p>
      <div role="radio-group" aria-label="billing period" className="flex gap-6">
        <label
          htmlFor="monthly"
          className={`px-11 py-2.5 text-neutral-600 font-medium cursor-pointer select-none border md:text-lg ${billing === 'monthly' ? 'rounded border-solid border-neutral-200 text-neutral-900 shadow-sm' : 'border-transparent'}`}
        >
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
        <label
          htmlFor="annual"
          className={`px-10 py-2.5 text-neutral-600 font-medium cursor-pointer select-none border md:text-lg ${billing === 'annual' ? 'rounded border-solid border-neutral-200 text-neutral-900 shadow-sm' : 'border-transparent'}`}
        >
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

      <div className="flex flex-col gap-8 my-7 md:w-full lg:flex-row">
        {planData.map((plan) => {
          return <PlanCard key={plan.name} plan={plan} billing={billing} />;
        })}
      </div>
    </main>
  );
}

export default App;
