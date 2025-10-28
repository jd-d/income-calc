# income-calculator

A responsive income planner for independent professionals. Enter the monthly take-home you want, your expected tax rate, fixed operating costs, and realistic billable hours. The planner instantly shows:

- The gross revenue you need after taxes, savings margin, and costs.
- Required hourly rates for different billable hour scenarios.
- Net income comparisons for the hourly rates you already charge.

Everything runs entirely in the browser and persists nothing except your optional theme preference.

## Running locally

Open `index.html` in any modern browser. No build pipeline is required.

## Manual regression check

1. Load the calculator and leave the default inputs.
2. Confirm the “Hourly rate required for your goal” table shows five rows with hourly rates between €65 and €196.
3. Change **Billable hours per week** to `12, 18, 24` and confirm the table updates to three rows without reloading.
4. Set **Hourly rate checkpoints** to `55, 65, 75` and verify the “Net income at selected hourly rates” table now displays three scenarios and highlights the monthly gap column in green when the goal is met.
