# PVR Cinema Movie Ticket Booking Test Plan

## Overview
This test plan covers the workflow for booking movie tickets on PVR Cinemas website. The tests focus on finding movies available within 2 hours and selecting seats from the top 3 rows (closest to screen) for a total of 2 tickets.

---

## Test Scenarios

### Test Suite 1: Movie Selection & Time Filter

#### TC-001: Verify User Can Filter Movies Within 2 Hours
**Objective:** Ensure the system correctly displays movies scheduled within 2 hours of current time

**Pre-requisites:**
- User is on PVR Cinemas home page
- User has selected a city (Nizamabad / Any preferred location)

**Steps:**
1. Navigate to https://www.pvrcinemas.com/
2. Select a time-zone city from dropdown
3. Identify current time and calculate 2-hour window
4. View available movies scheduled within the next 2 hours
5. Verify the movie list is not empty

**Expected Results:**
- Movies scheduled between current time and current time + 2 hours are displayed
- Each movie shows title, language, and show timings
- At least one movie should be available within the 2-hour window

**Acceptance Criteria:**
- System displays minimum 1 movie within 2-hour timeframe
- Movie details (title, language, genres) are visible
- Show timing matches the 2-hour constraint

---

#### TC-002: Select Movie and View Available Showtimes
**Objective:** Verify user can select a movie and view its available showtimes

**Pre-requisites:**
- User is on PVR home page with city selected
- At least one movie is available within 2 hours

**Steps:**
1. From the list of available movies, click on a movie scheduled within 2 hours
2. Verify the movie details page loads
3. View available showtimes for the selected date
4. Select a showtime within 2-hour window from current time

**Expected Results:**
- Movie details page displays correctly
- All showtimes for the selected date are shown
- Showtimes are sorted chronologically

**Acceptance Criteria:**
- Movie title, language, rating, and duration are displayed
- At least one valid showtime is shown within 2-hour window
- No errors occur during selection

---

#### TC-003: Navigate to Seat Selection for Selected Showtime
**Objective:** Verify user can proceed to seat selection after choosing a showtime

**Pre-requisites:**
- User has selected a movie and showtime within 2-hour window

**Steps:**
1. Click on the selected showtime
2. Verify booking page loads with theater layout
3. Confirm seat selection screen is displayed

**Expected Results:**
- Seat selection layout loads without errors
- Theater layout is visible with seat grid
- Booked seats are visually distinguished from available seats

**Acceptance Criteria:**
- Theater seat map is displayed accurately
- Seat status indicators (available/booked/blocked) are clear
- No page load errors occur

---

### Test Suite 2: Seat Selection & Booking

#### TC-004: Select Top 3 Row Seats (Farthest from Screen)
**Objective:** Verify user can select 2 seats from top 3 rows of the theater

**Pre-requisites:**
- User is on the seat selection page
- Theater layout is fully loaded
- Top 3 rows contain available seats

**Steps:**
1. Identify top 3 rows (rows closest to screen/farthest positioning) in the theater
2. Verify available seats in these rows are clickable
3. Select first available seat from top 3 rows
4. Select second available seat from top 3 rows
5. Verify seat selection counter shows "2 seats selected"

**Expected Results:**
- Selected seats are highlighted/marked
- Seat count updates to show 2 selected
- Total amount for 2 tickets is calculated and displayed
- No booked or blocked seats are selectable

**Acceptance Criteria:**
- Both seats must be from rows A, B, or C (or first 3 rows)
- Seats are clearly marked as selected
- Pricing for 2 tickets is displayed
- Selected seats are consecutive or within reasonable distance warning (if applicable)

---

#### TC-005: Verify Seat Selection Restrictions
**Objective:** Ensure only valid seats from top 3 rows can be selected and only 2 seats can be selected

**Pre-requisites:**
- User is on seat selection page with theater layout visible

**Steps:**
1. Attempt to select a seat from rows beyond top 3 (row 4 or later)
2. Verify the seat selection is either blocked or a warning is displayed
3. With 2 seats selected, attempt to select a 3rd seat
4. Verify system prevents selecting more than 2 seats

**Expected Results:**
- Seats outside top 3 rows remain unselectable or show warning
- System prevents selection of 3rd seat
- Error message displays if limit exceeded

**Acceptance Criteria:**
- Only seats from top 3 rows are selectable
- Maximum 2 seats can be selected
- Clear error messages guide user

---

#### TC-006: Proceed to Payment with Selected Seats
**Objective:** Verify user can proceed to payment/checkout with 2 selected seats

**Pre-requisites:**
- 2 seats from top 3 rows are selected
- Total booking amount is calculated

**Steps:**
1. Click "Proceed to Payment" or "Continue" button
2. Verify booking summary is displayed
3. Confirm seats, show timing, and total amount are correct
4. Verify no errors occur during transition

**Expected Results:**
- Booking summary page loads
- All booking details are correctly displayed:
  - Movie name
  - Showtime and date
  - Selected seat numbers
  - Total amount
- User can proceed to payment gateway

**Acceptance Criteria:**
- Booking summary is accurate
- All required information is present
- Proceed to payment button is functional
- No data loss during transition

---

### Test Suite 3: Error Handling & Edge Cases

#### TC-007: Handle Seat Unavailability During Selection
**Objective:** Verify system handles gracefully when selected seat becomes unavailable

**Steps:**
1. Select first seat from top 3 rows
2. If system shows seat became unavailable (concurrent booking), verify error message
3. Verify user is prompted to select different seat

**Expected Results:**
- Clear error message displayed for unavailable seat
- User can deselect and choose alternative seat
- No partial bookings are processed

**Acceptance Criteria:**
- Error handling is graceful
- User experience is not disrupted
- System remains stable

---

#### TC-008: Verify Theater Shows No Available Seats in Top 3 Rows
**Objective:** Handle scenario where top 3 rows are fully booked

**Steps:**
1. If top 3 rows are fully booked, verify system displays message
2. Verify user is informed of unavailability
3. Allow user to choose alternative showtime or movie

**Expected Results:**
- User receives clear notification
- Alternative options are suggested
- User can navigate back to movie/showtime selection

---

## Test Data

| Parameter | Value |
|-----------|-------|
| Website URL | https://www.pvrcinemas.com/ |
| City Selection | Nizamabad / Hyderabad |
| Time Window | Current time to Current time + 2 hours |
| Seat Selection Count | 2 seats |
| Target Rows | Top 3 rows (A, B, C or first 3 rows from screen) |
| Theater | Any PVR theater in selected city with available shows |

---

## Execution Strategy

1. **Pre-Execution:** Verify at least one movie is showing within 2-hour window at selected theater
2. **Seat Selection:** Use XPath to identify row positions and select from top 3 rows only
3. **Validation:** Assert on seat count, total amount, and booking details
4. **Post-Execution:** Verify booking reference/confirmation (if test completes full flow)

---

## Test Environment

- **Browser:** Chromium / Chrome
- **OS:** Windows / Mac / Linux
- **Network:** Stable internet connection required
- **Viewport:** Desktop (1920x1080 recommended for visibility)

---

## Success Metrics

- All test cases pass successfully
- Booking flow completes without errors
- Seat selection is accurate from top 3 rows
- No data loss during transitions
- Clear error messages for invalid operations
- Booking confirmation is received

---

## Notes

- Tests may need time-based adjustments based on actual time window availability
- Movie availability depends on theater's current schedule
- Seat pricing may vary based on movie type (3D, Standard, Premium)
- Consider adding visual regression testing for seat layout changes
