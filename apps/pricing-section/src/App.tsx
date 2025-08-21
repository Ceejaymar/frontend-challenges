import { useState } from 'react';
import PlanCard from './components/plan-card';
import { planData } from './config/plan-data';

type Billing = 'monthly' | 'annual';

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
      <div>
        <button onClick={() => setBilling('monthly')}>Monthly</button>
        <button onClick={() => setBilling('annual')}>Annually</button>
      </div>

      <div className="flex flex-col">
        {planData.map((plan) => {
          return <PlanCard key={plan.name} plan={plan} />;
        })}
      </div>
    </main>
  );
}

export default App;
