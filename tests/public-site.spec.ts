import { expect, test } from "@playwright/test";

test.describe("Hebrew DPO public website", () => {
  test("renders the main RTL sections and CTA flow", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/DPO/);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "אמל בראנסי",
    );
    await expect(page.getByText("תיקון 13 נכנס לתוקף")).toBeVisible();
    await expect
      .poll(async () =>
        page
          .getByAltText("אמל בראנסי, ממונה הגנת פרטיות DPO")
          .evaluate((image) => (image as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);

    for (const sectionId of [
      "services",
      "expertise",
      "risk",
      "assessment",
      "clients",
      "contact",
    ]) {
      await expect(page.locator(`#${sectionId}`)).toBeVisible();
    }

    await page.getByRole("link", { name: "לתיאום שיחת אבחון" }).click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("keeps mobile layout inside the viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 2,
    );

    expect(hasHorizontalOverflow).toBe(false);
    await expect(page.getByLabel("פתיחת תפריט")).toBeVisible();
    await page.getByLabel("פתיחת תפריט").click();
    await expect(page.getByRole("navigation", { name: "ניווט מובייל" })).toBeVisible();
  });

  test("contact area avoids a dead form and legal links resolve", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await expect(page.locator("form")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "פרטי קשר" })).toBeVisible();
    await expect(page.getByRole("link", { name: "A@aklaw.ai" })).toHaveAttribute(
      "href",
      "mailto:A@aklaw.ai",
    );
    await expect(page.getByRole("link", { name: "054-242-9950" })).toHaveAttribute(
      "href",
      "tel:+972542429950",
    );
    await expect(page.getByRole("link", { name: "Amal Kamal Baransi" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/amal-kamal-baransi-747158154/",
    );

    await page.getByRole("link", { name: "מדיניות פרטיות" }).click();
    await expect(page.getByRole("heading", { name: "מדיניות פרטיות" })).toBeVisible();

    await page.goto("/");
    await page.getByRole("link", { name: "הצהרת נגישות" }).click();
    await expect(page.getByRole("heading", { name: "הצהרת נגישות" })).toBeVisible();
  });

  test("does not publish testimonial placeholders", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("מקום שמור לעדויות")).toHaveCount(0);
    await expect(page.getByText("הוכחה חברתית")).toHaveCount(0);
    await expect(page.getByText("עם מי אני עובדת")).toBeVisible();
  });

  test("captures nonblank visual smoke screenshots", async ({ page }) => {
    await page.goto("/");

    const desktop = await page.screenshot({ fullPage: true });
    expect(desktop.length).toBeGreaterThan(50_000);

    await page.setViewportSize({ width: 390, height: 844 });
    const mobile = await page.screenshot({ fullPage: true });
    expect(mobile.length).toBeGreaterThan(30_000);
  });
});
