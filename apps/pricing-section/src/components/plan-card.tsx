export default function PlanCard({ plan }) {
  return (
    <div className="flex flex-col">
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      <div>
        <span>${plan.price}</span>/month
        <span>Billed annually (${(plan.price * 12 * (1 - plan.annualDiscount)).toFixed(2)})</span>
      </div>
      <div>
        {plan.features.map((feature) => (
          <div key={feature}>
            <i>✔️</i>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button type="button">Choose Plan</button>
    </div>
  );
}
