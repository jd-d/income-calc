# TODO – Sprint Plan
_As of: 2025-10-31 00:55 (CET)_

This sprint plan is to be carried out before returning to backlog items.

This file maps small, shippable sprints to enrich the simple **income-calc** (single `index.html`) with the most useful parts of another repo, **zzp-calc**. Each sprint is intentionally small so changes are understandable and reviewable. Keep a strict “ship after every sprint” habit.

---

## Sprint 0 – Stabilise the current calculator
**Goal:** Fix today’s friction before adding features.
- [ ] Recalc bug: update outputs instantly when toggling **Monthly ↔ Annual**.
- [ ] Recalc bug: update outputs instantly when toggling **Net ↔ Gross**.
- [ ] Introduce a single `calcState` object as the source of truth.
- [ ] Persist `calcState` to `localStorage` on change and hydrate on load.
**Done when:**
- [ ] Any top toggle change recomputes all dependent values.
- [ ] No console errors.
- [ ] Reload restores previous values.

## Sprint 1 – Lightweight module structure (still single file)
**Goal:** Prepare for growth without leaving `index.html`.
- [ ] Convert inline JS to `<script type="module">`.
- [ ] Create internal sections: `state/`, `utils/`, `ui/` in one module block.
- [ ] One binding dispatcher: `bindInput(id, path)` writes to `calcState`.
- [ ] Minimal validation with inline messages.
**Done when:**
- [ ] All inputs read/write via the dispatcher.
- [ ] Code remains in a single `index.html`.

## Sprint 2 – Capacity basics
**Goal:** Add realistic constraints in tiny steps.
- [ ] Inputs: **months off**, **weekly hours**, **utilization**.
- [ ] Derived: `billableHoursPerYear`, `billableHoursPerMonth`.
- [ ] UI warning when planned work exceeds capacity.
**Done when:**
- [ ] Adjusting capacity visibly changes achievable outputs.
- [ ] Clear accessibility-friendly warning copy.

## Sprint 3 – Cost aggregation MVP
**Goal:** One place for all costs to avoid drift.
- [ ] Utility: aggregate **fixed monthly**, **per-hour**, **per-travel-day** costs.
- [ ] Display monthly and annual totals from that one function.
- [ ] Add **tax reserve percent** input that feeds Net calculation.
**Done when:**
- [ ] All cost displays use the same function.

## Sprint 4 – First service card (Retainer only)
**Goal:** Prove the service-card pattern with a single service.
- [ ] Card “Retainer” with two views: **Rate needed** and **Volume needed**.
- [ ] Use capacity + cost utilities; factor hours-per-unit and travel overhead.
- [ ] Mobile-friendly, two-column mini-metrics.
**Done when:**
- [ ] With only Retainer, app answers “how much to charge?” or “how many units?”.

## Sprint 5 – Config-driven multi-service
**Goal:** Add services without new logic.
- [ ] Move services to a config array in the module.
- [ ] Render one card per config entry (e.g., Advisory, QC, Training).
- [ ] Allow per-service override: **lock rate** or **lock units**.
**Done when:**
- [ ] Adding a service is a config edit, not new logic.

## Sprint 6 – Scenario presets & sliders
**Goal:** Fast exploration with simple controls.
- [ ] Preset chips: months off (0,1,2), weekly hours (32,36,40), travel intensity (low/base/high).
- [ ] Sliders: **utilization** and **tax reserve** (debounced).
- [ ] Last interaction wins; chips and sliders stay in sync.
**Done when:**
- [ ] Tap or slide recomputes immediately and feels snappy.

## Sprint 7 – Sensitivity sparklines (no heavy charts)
**Goal:** Micro-visuals to teach intuition.
- [ ] Inline SVG sparklines for **Net vs Months Off** and **Net vs Utilization**.
- [ ] Small markers for break-even thresholds.
**Done when:**
- [ ] Two responsive, accessible sparklines render live from state.

## Sprint 8 – Manual portfolio mix
**Goal:** Understand the shape before any optimizer.
- [ ] “Portfolio” section that sums a user-chosen service mix under capacity.
- [ ] Highlight over-capacity and over-travel states.
- [ ] Pin a manual mix and show summary metrics.
**Done when:**
- [ ] Clear portfolio summary and constraint highlights without automation.

## Sprint 9 – Simple optimizer (grid or heuristic)
**Goal:** Introduce automation carefully.
- [ ] Small grid-search across reasonable service ranges (respect caps).
- [ ] Score by meeting target with minimal overrun and comfort buffer.
- [ ] Show top 3 mixes with quick-compare and **Pin** action.
**Done when:**
- [ ] Typical inputs produce at least one feasible suggested mix.

## Sprint 10 – Dutch tax toggles (pragmatic)
**Goal:** Add realism while keeping complexity contained.
- [ ] Toggles: **zelfstandigenaftrek**, **startersaftrek**, **MKB-vrijstelling**, **Zvw** rate.
- [ ] One central tax function with transparent assumptions and notes.
**Done when:**
- [ ] Net reflects selected 2025 rules; assumptions are visible in UI.

---

## Guardrails for the single-file approach
- Keep everything in `index.html`, but use one `<script type="module">` with clear sections: `state`, `utils`, `services`, `ui`.
- Persistence: `localStorage` under `ic.state.v1` (schema can evolve with a version key).
- Rendering: one `render()` that updates only changed sections.
- Release discipline: ship after every sprint; add a tiny “What’s new” note in-page.

## Issue labels suggestion (optional)
- `sprint-0`..`sprint-10`, `bug`, `feature`, `enhancement`, `ui`, `optimization`, `nl-tax`, `frontend`.

## Next steps
1) Start with **Sprint 0** and **Sprint 1** in a single PR if you like, since both are mechanical and small.  
2) I can also generate GitHub Issues and a `gh` script to create them automatically.  
3) When you say “go”, I’ll prep the `calcState` skeleton and binding dispatcher inline for your `index.html`.

# BACKLOG
To be executed after the sprint planning 

## Backlog Highest Priority (Fixes)
- [ ] Validate numeric inputs so empty fields show friendly guidance instead of producing NaN results.
- [ ] Add an option to download the scenario table as CSV for sharing with accountants.

## Backlog Highest Priority (UI/UX)
- [ ] Add an inline legend explaining how each cell’s net income is derived (revenue – costs – taxes).

## Backlog Medium Priority
- [ ] Allow saving and loading named planning presets.
- [ ] Support progressive tax brackets in addition to the effective tax rate slider.
- [ ] Surface billable-hour utilisation assumptions alongside the scenario table.

## Backlog Low Priority
- [ ] Investigate auto-detecting locale number formatting for placeholders and examples.

# DONE
- [x] Replace the class-based pricing template with a service-focused income planner layout so terminology matches our use case. (2025-10-28)
- [x] Fix that green table cell backgrounds don't display when not in fixed lesson price mode any more. (Superseded by planner redesign – 2025-10-28)
- [x] On touch screen when finger is on table you can't scroll up and down, can only scroll when finger right on the side, which isn't practical, scrolling up and down of whole page/site should be possible when finger on table. (Superseded by planner redesign – 2025-10-28)
- [x] Stop resetting acceptable income range max to 0 when it's left empty, because empty is valid as it means no upper limit. (Superseded by planner redesign – 2025-10-28)
- [x] When setting min max lesson price the auto-correct for the amounts is too aggressive: if one removes a value it immediately populates another higher value – relax the auto calculate here, at least wait until the user has entered a new value and left the edit box. OR use a single field that allows a range entry like: 95-105 (this might be better). (Superseded by planner redesign – 2025-10-28)
- [x] Revise the time-off and day-off logic, including related styling adjustments. (Superseded by planner redesign – 2025-10-28)
- [x] Add safety margin controls and reorganize the settings layout for clarity. (Superseded by planner redesign – 2025-10-28)
- [x] Split up index.html into smaller modules somehow. (Superseded by planner redesign – 2025-10-28)
- [x] Show additional table that (can) just show valid candidates based on lesson price range / income range. perhaps in format like: students | classes p wk | lesson price | price ex VAT | hourly net | lesson net | etc. (Superseded by planner redesign – 2025-10-28)
- [x] Add checkboxes under table to toggle the various bits of info in the cells on/off like: show VAT, show buffer, show base, show hourly; and a radio button or left-right switch for gross/net, OR have gross and net checkboxes too so both can be displayed. (Superseded by planner redesign – 2025-10-28)
- [x] In addition to the accountant's monthly report, have an even more detailed one that shows actual calculations like costs multiplied by the relevant multiplier, or tax % applied etc so user can verify calculations. (Superseded by planner redesign – 2025-10-28)
- [x] Consider also providing spreadsheet download where calculations are all visible including formulas. (Superseded by planner redesign – 2025-10-28)
- [x] Future: have actual calendar tabs with coming months to allow actual planning of lessons. (Superseded by planner redesign – 2025-10-28)
- [x] User can add their own costs in a custom costs section. They type the short description and pick from a dropdown: Weekly, Monthly, Annual, per lesson, per student, per active day, per active week, per active month. (Superseded by planner redesign – 2025-10-28)
- [x] Add a button up top of the page similar to the other two buttons up there "Save as an app!" which when clicked pops up a succinct explainer per platform iPhone, Android (and whatever other platforms work) about what the steps are to save the page as a web app. (Superseded by planner redesign – 2025-10-28)
- [x] Auto-select light or dark mode by time of day but add a lock icon next to it the user can press to keep it on either. They can still manually switch the switch (they don't need to actually press the lock first) but it won't auto change if the lock is locked. (Superseded by planner redesign – 2025-10-28)
- [x] Rename Net Income section simply to Desired Income, and add two buttons: Toggle Gross/Net, and Toggle Gross/Net (lock amount)... (2025-10-19)
  - [x] Add an optional acceptable income ranges section... (2025-10-19)
    - [x] If acceptable income is filled in... (2025-10-19)
- [x] Add an hours per lesson box... (2025-10-20)
- [x] Add an input field after "Students per Class"... (2025-10-20)
- [x] Add a radio button next to the annual target field... (2025-10-20)
- [x] Ensure on mobile that the preset buttons appear above the form... (2025-09-30)
- [x] Swap the prominence of prices with and without VAT... (2025-09-30)
- [x] Consolidate the pricing table to display only the buffered price... (2025-09-30)

