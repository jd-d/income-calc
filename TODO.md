# TODO

## High Priority (Fixes)
- [ ] Validate numeric inputs so empty fields show friendly guidance instead of producing NaN results.
- [ ] Add an option to download the scenario table as CSV for sharing with accountants.

## High Priority (UI/UX)
- [ ] Add an inline legend explaining how each cell’s net income is derived (revenue – costs – taxes).

## Medium Priority
- [ ] Allow saving and loading named planning presets.
- [ ] Support progressive tax brackets in addition to the effective tax rate slider.
- [ ] Surface billable-hour utilisation assumptions alongside the scenario table.

## Low Priority
- [ ] Investigate auto-detecting locale number formatting for placeholders and examples.

## DONE
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
