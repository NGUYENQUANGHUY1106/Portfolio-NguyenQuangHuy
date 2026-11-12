const assert = require('node:assert/strict');
const { chromium } = require(process.argv[2] || 'playwright-core');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    page.setDefaultTimeout(10000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    assert.equal(await page.locator('.project-card').count(), 4);
    assert.equal(await page.locator('.skill-row').count(), 4);
    assert.equal(await page.locator('.is-building').count(), 0);
    const cv = await page.request.get('http://127.0.0.1:4173/assets/Nguyen-Quang-Huy-CV.pdf');
    assert.equal(cv.status(), 200);
    assert.match(cv.headers()['content-type'], /pdf/);
    async function revealPage() {
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < height; y += 650) {
        await page.evaluate(top => scrollTo({ top, behavior: 'instant' }), y);
        await page.waitForTimeout(90);
      }
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      await page.waitForTimeout(700);
    }
    await revealPage();
    await page.screenshot({ path: 'test-results/desktop.png', fullPage: true });
    for (let i = 0; i < 4; i++) {
      const trigger = page.locator(`.project-footer button[data-project="${i}"]`);
      await trigger.click();
      assert.equal(await page.locator('dialog').evaluate(d => d.open), true);
      assert.ok((await page.locator('#dialog-title').textContent()).length > 0);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('dialog').evaluate(d => d.open), false);
      assert.equal(await trigger.evaluate(b => b === document.activeElement), true);
    }
    await page.locator('#replay').click();
    await page.locator('#skip-animation').click();
    assert.equal(await page.locator('.is-building').count(), 0);
    assert.equal(await page.locator('.swarm-cursor').count(), 0);
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('http://127.0.0.1:4173/#gioi-thieu');
      await page.waitForTimeout(3000);
      const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: innerWidth }));
      assert.ok(dimensions.scroll <= dimensions.viewport, `Horizontal overflow at ${width}: ${JSON.stringify(dimensions)}`);
      if (width === 390) {
        await page.locator('.menu-toggle').click();
        assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
        await page.locator('#navigation a[href="#du-an"]').click();
        assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
        await page.waitForTimeout(1000);
        assert.equal(await page.locator('#navigation a[href="#du-an"]').getAttribute('aria-current'), 'location');
        await page.goto('http://127.0.0.1:4173');
        await page.waitForTimeout(3000);
        await revealPage();
        await page.screenshot({ path: 'test-results/mobile.png', fullPage: true });
      }
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('http://127.0.0.1:4173');
    assert.equal(await page.locator('.is-building, .is-waiting, .swarm-cursor').count(), 0);
    await page.locator('#replay').click();
    assert.equal(await page.locator('.swarm-cursor').count(), 0);
    assert.deepEqual(errors, []);
    console.log('PASS: 4 project dialogs, focus restoration, CV PDF, animation replay/skip, mobile menu, active navigation, 5 viewport widths, reduced motion, no browser errors.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
