import { type Billing, type Plan } from '../types';

type PlanCard = {
  plan: Plan;
  billing: Billing;
};

export default function PlanCard({ plan, billing }: PlanCard) {
  const monthlyAnnualPrice = (plan.price * (1 - plan.annualDiscount)).toFixed(2);
  const annualPrice = Math.ceil(plan.price * 12 * (1 - plan.annualDiscount));

  return (
    <div className="flex flex-col">
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      <div>
        <span>${billing === 'monthly' ? plan.price : monthlyAnnualPrice}</span>/{billing}
        {billing === 'monthly' ? (
          <span> (billed monthly)</span>
        ) : (
          <span>Billed annually (${annualPrice})</span>
        )}
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <i>✔️</i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button type="button">Choose Plan</button>
    </div>
  );
}
