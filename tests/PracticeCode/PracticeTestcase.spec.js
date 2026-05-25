import { test, expect } from "@playwright/test";

test("Text Visibility Validation", async ({ page }) => {
  await page.goto("https://example.com/");
  await expect(page.locator("h1")).toBeVisible();
  let text = await page.locator("h1").textContent();

  await expect(page.locator("h1")).toHaveText("Example Domain");
  console.log(text);

  //     Interview Tip (important)
  // toHaveText() → for locator
  // toBe() / toEqual() → for values (string, number, etc.)
});

test("Input Field Enable/Disable Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

  let inputTxt = page.locator('input[type="text"]');
  await expect(inputTxt).toBeDisabled();
  await page.locator('[onclick="swapInput()"]').click();

  await expect(inputTxt).toBeEnabled();
  await inputTxt.fill("Sanchitaaa");
  await expect(inputTxt).toHaveValue("Sanchitaaa");
});

test("Checkbox Selection Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  await page.locator('[type="checkbox"]').check();
  await expect(page.locator('[type="checkbox"]')).toBeChecked();
  await page.locator('[type="checkbox"]').uncheck();
  await expect(page.locator('[type="checkbox"]')).not.toBeChecked();
});

test("Dropdown Value Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  //   await page.locator("select#dropdown").selectOption("Option 2");
  //   await expect(page.locator('option[selected="selected"]')).toHaveText("Option 2")

  const dropDown = await page.locator("#dropdown");

  await dropDown.selectOption("2");
  await expect(dropDown).toHaveValue("2");

  const selectedText = await dropDown.locator("option:checked").textContent();
  console.log("selected options", selectedText);
});

test("Login Success Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.locator('[type="submit"]').click();
  let ValidateMsg = await page.locator("#flash").textContent();
  console.log(ValidateMsg);
  await expect(page.locator("#flash")).toContainText(
    "logged into a secure area! ×",
  );

  // await expect(page).toHaveURL("/.*secure/")

  // Validate URL contains /secure
  await expect(page).toHaveURL(/.*secure/);
});

test("Login Error Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.locator("#username").fill("tosmith");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.locator('[type="submit"]').click();
  await expect(page.locator("#flash")).toContainText(
    "Your username is invalid! ×",
  );
});

test("Element Visibility After Click", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await page.locator('[id="start"]>button').click();
  let ele = await page.locator("[id='finish']");
  await ele.waitFor("state:visible");
  await expect(page.locator("#finish>h4")).toHaveText("Hello World!");
});

test("Table Data Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/tables");
  let row = await page.locator("#table1 tbody tr");
  let rowCount = await row.count();
  console.log(rowCount);

  //validate a specific row contains 'jason'

  let found = false;

  for (let i = 0; i < rowCount; i++) {
    const rowText = await row.nth(i).textContent();
    if (rowText.includes("Jason")) {
      found = true;
      break;
    }
  }

  expect(found).toBeTruthy();
});

test("Alert Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  //Click JS Alert
  await page.on("dialog", async (dia) => {
    expect(dia.type()).toBe("alert");
    expect(dia.message()).toBe("I am a JS Alert");
    await dia.accept();
  });

  await page.locator('[onclick="jsAlert()"]').click();
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert",
  );
});

test("URL & Title Validation", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  //    await expect(page).toHaveTitle(/playwright/);
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL("https://playwright.dev/");
  await expect(page.locator("body")).toBeVisible();
});

test("File Upload Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page
    .locator("#file-upload")
    .setInputFiles("S:/Playwright/PlaywrightByCD/Resume 5.pdf");

  await page.locator("#file-submit").click();
  await expect(page.locator("#uploaded-files")).toHaveText("Resume 5.pdf");
});

test("API Response Validation (Playwright API Testing)", async ({
  request,
}) => {
  let req = await request.get("https://jsonplaceholder.typicode.com/users/1");
  console.log(req);
  let statusCode = req.status();
  // console.log(statusCode)
  await expect(statusCode).toBe(200);
  const body = await req.json();
  await expect(body.email).toBe("Sincere@april.biz");
  await expect(body.id).toBe(1);
});

test("Broken Image Validation1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  await page.waitForLoadState("domcontentloaded");
  const images = page.locator("img");
  console.log(await images.count());
  const allImages = await images.all(); // its return as iterable element

  for await (const img of allImages) {
    const imgSrc = await img.getAttribute("src");
    expect(imgSrc?.length).toBeGreaterThan(1);

    //@ts-ignore
    if (imgSrc?.lengh > 1) {
      const res = await page.request.get(
        "https://the-internet.herokuapp.com/" + imgSrc,
      );
      await expect.soft(res.status(), "Failed to load").toBe(200);
    }
  }
});

test.only("Broken Image Validation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  // Get all images
  const images = await page.locator("img").all();

  let brokenCount = 0;

  for (const img of images) {
    const isBroken = await img.evaluate((image) => {
      return image.naturalWidth === 0;
    });

    if (isBroken) {
      brokenCount++;
    }
  }

  console.log("Number of broken images:", brokenCount);
});
