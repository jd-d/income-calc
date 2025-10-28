# TODO

## High Priority (Fixes)
- [ ] Fix that green table cell backgrounds don't display when not in fixed lesson price mode any more.
- [ ] On touch screen when finger is on table you can't scroll up and down, can only scroll when finger right on the side, which isn't practical, scrolling up and down of whole page/site should be possible when finger on table.
- [ ] Stop resetting acceptable income range max to 0 when it's left empty, because empty is valid as it means no upper limit.
- [ ] When setting min max lesson price the auto-correct for the amounts is too aggressive: if one removes a value it immediately populates another higher value (perhaps assuming removal is 0 which it doesn't permit as it invalidates calculations) - relax the auto calculate here, at least wait until the user has entered a new value and left the edit box. OR use a single field that allows a range entry like: 95-105 (this might be better).

## High Priority (UI/UX)
- [ ] Revise the time-off and day-off logic, including related styling adjustments.
- [ ] Add safety margin controls and reorganize the settings layout for clarity.
- [ ] Split up index.html into smaller modules somehow.

## Medium Priority
- [ ] Show additional table that (can) just show valid candidates based on lesson price range / income range. perhaps in format like: students | classes p wk | lesson price | price ex VAT | hourly net | lesson net | etc.
- [ ] Add checkboxes under table to toggle the various bits of info in the cells on/off like: show VAT, show buffer, show base, show hourly; and a radio button or left-right switch for gross/net, OR have gross and net checkboxes too so both can be displayed.
- [ ] In addition to the accountant's monthly report, have an even more detailed one that shows actual calculations like costs multiplied by the relevant multiplier, or tax % applied etc so user can verify calculations.
- [ ] Consider also providing spreadsheet download where calculations are all visible including formulas.
- [ ] Future: have actual calendar tabs with coming months to allow actual planning of lessons.
- [ ] User can add their own costs in a custom costs section. They type the short description and pick from a dropdown: Weekly, Monthly, Annual, per lesson, per student, per active day, per active week, per active month.
- [ ] Add a button up top of the page similar to the other two buttons up there "Save as an app!" which when clicked pops up a succinct explainer per platform iPhone, Android (and whatever other platforms work) about what the steps are to save the page as a web app.

## Low Priority
- [ ] Auto-select light or dark mode by time of day but add a lock icon next to it the user can press to keep it on either. They can still manually switch the switch (they don't need to actually press the lock first) but it won't auto change if the lock is locked.

## DONE
- [x] Rename Net Income section simply to Desired Income, and add two buttons: Toggle Gross/Net, and Toggle Gross/Net (lock amount). Pressing the Toggle Gross/Net button when Net incomes are being displayed will switch to displaying the equivalente gross income amounts instead. Pressing the other Toggle "Gross/Net (lock amount)" button will instead "lock" the amounts entered but regard them as Gross amounts and recalculate other values across the page accordingly. When the toggle is pressed, the section title must clearly indicate which values are being displayed, Net or Gross, by toggling between the title Desired Net Income and Desired Gross Income as appropriate. (2025-10-19)
  - [x] Add an optional acceptable income ranges section under the Desired Income section where the user can enter from and to values of what they consider an acceptable income range, and they can enter this either monthly or annually. (These also follow the new Net/Gross toggle system). (2025-10-19)
    - [x] If acceptable income is filled in, either min or max, or both, let's give the squares of the lesson price table a shaded green background when they fall within acceptable income range. Pick a nice suitable green shade that fits both light and dark modes or different green shades for each. It should also be shades of green that are compatible with red text in case the lesson price rules make the text red for square shaded green. (2025-10-19)
- [x] Add an hours per lesson box somewhere appropriate in the inputs. And also then add a net (or gross depending on net/gross toggles) hourly income (which doesn't populate of lesson length hasn't been filled in - say that in the info pop-up). (2025-10-20)
- [x] Add an input field after "Students per Class" for "Lesson length (mins)" and use it to append hourly pricing (e.g., "(€XX/hr)") to each lesson price in the table. (2025-10-20)
- [x] Add a radio button next to the annual target field to decide if targets are gross or net and adjust calculations accordingly. (2025-10-20)
- [x] Ensure on mobile that the preset buttons appear above the form and reduce the large space that appears on mobile between the blog title and the form (see pic). (2025-09-30)
- [x] Swap the prominence of prices with and without VAT so the price including VAT is shown as the primary figure, with the VAT-exclusive amount secondary. (2025-09-30)
- [x] Consolidate the pricing table to display only the buffered price, omitting separate breakeven and buffered values. (2025-09-30)
