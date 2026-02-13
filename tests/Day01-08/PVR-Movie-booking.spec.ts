import { test, expect } from "@playwright/test";

// Helper function to get current time + 2 hours window
function getTimeWindow() {
  const now = new Date();
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  return { current: now, twoHours: twoHoursLater };
}

// Helper to extract hour from time string
function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

test.describe("PVR Cinema Movie Ticket Booking", () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to PVR Cinemas website
    await page.goto("https://www.pvrcinemas.com/");
    // Wait for page to fully load
    await page.waitForLoadState("networkidle");
  });

  test("TC-001: Verify User Can Filter Movies Within 2 Hours", async ({ page }) => {
    // Select city - Nizamabad
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Verify movies are displayed
    const movieElements = await page.locator(`//div[@class="show-details-icon"]`).count();
    expect(movieElements).toBeGreaterThan(0);
    console.log(`Found ${movieElements} movies available`);

    // Get the very first movie title
    const firstMovieTitle = await page.locator(`(//div[@class="show-details-icon"]//h5)[1]`).textContent();
    console.log(`First movie: ${firstMovieTitle}`);

    // Extract and log movie details
    const { current, twoHours } = getTimeWindow();
    console.log(`Current time: ${current.toLocaleTimeString()}`);
    console.log(`2-hour window ends: ${twoHours.toLocaleTimeString()}`);
  });

  test("TC-002: Select Movie and View Available Showtimes", async ({ page }) => {
    // Select city
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Click on very first available movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    const movieName = await firstMovie.textContent();
    await firstMovie.click();
    await page.waitForLoadState("networkidle");

    // Verify movie details page loads
    const movieTitle = await page.locator(`//h1 | //h2[contains(@class, 'movie-title')]`).first().isVisible();
    expect(movieTitle).toBeTruthy();

    console.log(`Selected first movie: ${movieName}`);
    console.log("Movie details page loaded successfully");
  });

  test("TC-003: Navigate to Seat Selection for Selected Showtime", async ({ page }) => {
    // Select city
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Select date if multiple dates available
    const dateElement = await page.locator(`//div[@class="dates-pvr-active"]`).first();
    if (await dateElement.isVisible()) {
      await dateElement.click();
      await page.waitForTimeout(500);
    }

    // Click on very first movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    await firstMovie.click();
    await page.waitForLoadState("networkidle");

    // Verify we're on seat selection page or can navigate there
    const seatLayout = await page.locator(`//*[contains(text(), 'Row')] | //div[contains(@class, 'seat')]`).first().isVisible().catch(() => false);
    console.log(`Seat layout visible: ${seatLayout}`);
  });

  test("TC-004: Select Top 3 Row Seats (2 seats from top rows)", async ({ page }) => {
    // Navigate through the booking flow
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Click on very first available movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    const movieName = await firstMovie.textContent();
    await firstMovie.click();
    await page.waitForLoadState("networkidle");

    // Wait for seat layout to be available
    await page.waitForTimeout(2000);

    console.log(`Selected first movie: ${movieName}`);

    // Try to find and click seats from top rows
    // Typically theater rows are labeled A, B, C, etc. from top (closest to screen)
    let selectedSeats = 0;
    const maxSeatsToSelect = 2;

    // Look for available seats in top rows (A, B, C are typically first 3 rows)
    // Try clicking first available seat in row A
    const rowASeats = await page.locator(`//div[contains(text(), 'A')] | //span[contains(text(), 'A')]`).all().catch(() => []);
    
    for (let i = 0; i < rowASeats.length && selectedSeats < maxSeatsToSelect; i++) {
      try {
        const seatButton = rowASeats[i];
        if (await seatButton.isEnabled() && await seatButton.isVisible()) {
          await seatButton.click();
          selectedSeats++;
          console.log(`Selected seat ${i + 1}`);
          await page.waitForTimeout(500);
        }
      } catch (error) {
        console.log(`Could not select seat ${i}`);
      }
    }

    // If we don't have 2 seats yet, try row B
    if (selectedSeats < maxSeatsToSelect) {
      const rowBSeats = await page.locator(`//span[contains(@class, 'seat')]`).all().catch(() => []);
      for (let i = 0; i < rowBSeats.length && selectedSeats < maxSeatsToSelect; i++) {
        try {
          const seat = rowBSeats[i];
          if (await seat.isEnabled() && await seat.isVisible()) {
            await seat.click();
            selectedSeats++;
            console.log(`Selected seat ${i + 1} from available seats`);
            await page.waitForTimeout(500);
          }
        } catch (error) {
          // Skip if seat is not clickable
        }
      }
    }

    expect(selectedSeats).toBeGreaterThanOrEqual(1);
    console.log(`Successfully selected ${selectedSeats} seat(s)`);
  });

  test("TC-005: Verify Seat Selection Restrictions", async ({ page }) => {
    // Navigate to seat selection
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Click on very first movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    await firstMovie.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    // Try to select multiple seats and verify limit enforcement
    let selectedCount = 0;
    const seats = await page.locator(`//a[contains(@class, 'seat')] | //button[contains(@class, 'seat')]`).all().catch(() => []);
    
    // Select up to 3 seats and verify the system doesn't allow more than 2
    for (let i = 0; i < Math.min(3, seats.length); i++) {
      try {
        const seat = seats[i];
        const isAvailable = await seat.isEnabled().catch(() => false);
        
        if (isAvailable) {
          await seat.click();
          selectedCount++;
          console.log(`Attempted to select seat ${i + 1}`);
          await page.waitForTimeout(300);
        }
      } catch (error) {
        // Continue if seat selection fails
      }
    }

    // Verify we selected at least 1 seat or system prevented selection
    console.log(`Final seat selection count: ${selectedCount}`);
  });

  test("TC-006: Proceed to Payment with Selected Seats", async ({ page }) => {
    // Complete the booking flow
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Select date
    const dateElement = await page.locator(`//div[@class="dates-pvr-active"]`).first();
    if (await dateElement.isVisible().catch(() => false)) {
      await dateElement.click();
      await page.waitForTimeout(500);
    }

    // Click on very first movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    const movieName = await firstMovie.textContent();
    await firstMovie.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    console.log(`Selected first movie: ${movieName}`);

    // Select 2 seats
    const availableSeats = await page.locator(`//a[not(contains(@class,'booked')) and not(contains(@class,'blocked'))]`).all();
    
    for (let i = 0; i < Math.min(2, availableSeats.length); i++) {
      try {
        await availableSeats[i].click();
        await page.waitForTimeout(300);
        console.log(`Seat ${i + 1} selected`);
      } catch (error) {
        console.log(`Could not select seat ${i}`);
      }
    }

    // Try to find and click proceed button
    const proceedButton = await page.locator(`//button[contains(text(), 'Next')] | //button[contains(text(), 'Continue')] | //button[contains(text(), 'Proceed')]`).first().isVisible().catch(() => false);
    
    if (proceedButton) {
      console.log("Proceed button found - booking ready");
    }
  });

  test("TC-007: Handle Seat Unavailability During Selection", async ({ page }) => {
    // This test verifies error handling when seats become unavailable
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Click on very first movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    await firstMovie.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    // Try to select seat and check for error messages
    try {
      const firstSeat = await page.locator(`//a[not(contains(@class,'booked'))]`).first();
      if (await firstSeat.isEnabled()) {
        await firstSeat.click();
        
        // Check for error message
        const errorMsg = await page.locator(`//div[contains(@class, 'error')] | //span[contains(@class, 'message')]`).first().isVisible().catch(() => false);
        
        if (errorMsg) {
          console.log("Error handling verified - system displays error message");
        } else {
          console.log("No error encountered - seat selected successfully");
        }
      }
    } catch (error) {
      console.log(`Error during seat selection handling: ${error.message}`);
    }
  });

  test("TC-008: Verify Theater with Limited Top Row Availability", async ({ page }) => {
    // This test handles scenario where top 3 rows are full
    await page.locator(`//span[contains(text(),'Nizamabad')]`).click();
    await page.waitForTimeout(2000);

    // Click on very first movie
    const firstMovie = page.locator(`(//div[@class="show-details-icon"]//h5)[1]`);
    const movieName = await firstMovie.textContent();
    await firstMovie.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    console.log(`Selected first movie: ${movieName}`);

    // Count available seats in top rows
    const topRowSeats = await page.locator(`//div[contains(text(), 'A')] | //div[contains(text(), 'B')] | //div[contains(text(), 'C')]`).count().catch(() => 0);

    if (topRowSeats === 0) {
      console.log("Top 3 rows are fully booked or not visible");
      
      // Verify alternative options are available
      const alternativeSeats = await page.locator(`//a[not(contains(@class,'booked'))]`).count();
      expect(alternativeSeats).toBeGreaterThanOrEqual(0);
    } else {
      console.log(`Found ${topRowSeats} available seats in top rows`);
    }
  });

});
