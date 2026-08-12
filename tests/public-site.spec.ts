import { expect, test } from "@playwright/test";

test.describe("Hebrew DPO public website", () => {
  test("renders the main RTL sections and CTA flow", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/DPO/);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "ממונה הגנת פרטיות",
    );
    await expect
      .poll(async () =>
        page
          .getByAltText("עמדת עבודה משפטית-טכנולוגית עם לוח בקרה לאבטחת מידע ופרטיות")
          .evaluate((image) => (image as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);

    for (const sectionId of [
      "services",
      "expertise",
      "risk",
      "assessment",
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

  test("lead form shell gives static-site feedback", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact").scrollIntoViewIfNeeded();

    await page.getByLabel("שם מלא").fill("נועה כהן");
    await page.getByLabel("ארגון ותפקיד").fill("מנהלת תפעול");
    await page.getByLabel("דוא״ל").fill("noa@example.com");
    await page.getByLabel("טלפון").fill("+972501234567");
    await page.getByLabel("במה כדאי להתמקד בשיחה?").fill("מיפוי פרטיות ראשוני");
    await page.getByRole("button", { name: /שליחת פנייה/ }).click();

    await expect(page.getByText("הטופס מוכן לחיבור")).toBeVisible();
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
