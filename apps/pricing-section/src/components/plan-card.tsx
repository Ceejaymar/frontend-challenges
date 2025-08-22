import { type Billing, type Plan } from '../types';
import { CheckIcon } from '@phosphor-icons/react';
import Button from './button';

type PlanCard = {
  plan: Plan;
  billing: Billing;
};

export default function PlanCard({ plan, billing }: PlanCard) {
  const monthlyAnnualPrice = (plan.price * (1 - plan.annualDiscount)).toFixed(2);
  const annualPrice = Math.ceil(plan.price * 12 * (1 - plan.annualDiscount));

  const billed = billing === 'monthly' ? 'Billed monthly' : `Billed annually ($${annualPrice})`;

  return (
    <div className="flex flex-col p-4 gap-7 rounded-lg shadow-xs border border-solid border-neutral-200 md:p-8 md:min-h-[532px] lg:flex-1">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-neutral-900 capitalize md:text-3xl lg:text-2xl">
          {plan.name}
        </h2>
        <p className="text-neutral-600 md:text-lg">{plan.description}</p>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-5xl font-semibold">
          ${billing === 'monthly' ? plan.price : monthlyAnnualPrice}
          <span className="text-base text-neutral-900 font-normal md:text-lg">/month</span>
        </span>
        <span className="text-neutral-600 md:text-lg">{billed}</span>
      </div>
      <ul className="flex flex-col gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-4 items-center text-neutral-600 md:text-lg">
            <div className="inline-flex items-center justify-center bg-indigo-50 rounded-full w-6 h-6 shrink-0">
              <CheckIcon className="inline text-indigo-500" weight="bold" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={plan.isPopular ? 'popular' : 'primary'} className="mt-auto">
        Buy now
      </Button>
    </div>
  );
}
