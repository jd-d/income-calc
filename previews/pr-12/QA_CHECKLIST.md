# Release QA Checklist

## Functional checks
- Theme toggle retains the last selected theme after reload and announces the active state via aria-pressed/aria-label.
- Switching the target period auto-converts the income target with two-decimal rounding and updates the summary immediately.
- Switching the target type auto-converts using the configured tax rate, shows the conversion hint, and refreshes the summary/table values.
- Changing both type and period sequentially produces deterministic results (type conversion first, then period conversion).
- Info buttons open context popovers that stay within the viewport, include a close control, respond to Escape/outside taps, and link to the "How to use this planner" guidance.
- Popovers and tooltips remain operable on small screens and by keyboard-only users.

## Conversion QA matrix
| Scenario | Input settings | Expected conversion behaviour |
| --- | --- | --- |
| Monthly Net | Period: Monthly · Type: Net | No conversion applied; hint remains empty after manual edits. |
| Monthly Gross | Change type Net → Gross | Target increases by `1 / (1 - taxRate)` and hint notes the tax rate (e.g., 32%). |
| Annual Net | Change period Monthly → Annual | Target multiplies by 12 and hint states "Converted to annual (×12)." |
| Annual Gross | Change type Net → Gross, then period Monthly → Annual | Amount first converts to gross using the tax rate, then multiplies by 12; hint reflects both steps and rounding. |

## Accessibility
- Screen reader focus returns to the originating control when popovers close.
- Info buttons include aria-haspopup, aria-controls, and aria-expanded updates.
- Theme toggle tooltip is readable on hover/focus and does not trap focus.

## Responsive verification
- Validate popover positioning on narrow (<480px) and standard desktop widths.
- Confirm scroll behaviour: background content remains scrollable when popovers are open.

Document any deviations along with reproduction steps before release.
