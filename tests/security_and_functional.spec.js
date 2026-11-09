import { test, expect } from '@playwright/test';
import path from 'path';

const localIndexPath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');

test.describe('DailyFlow Kapsamlı Güvenlik ve Fonksiyonel Testleri', () => {

  test('1. Fonksiyonel Görev Akışı (Ekleme, Tamamlama, Silme)', async ({ page }) => {
    await page.goto(localIndexPath);

    // Görev input'unu bul ve doldur
    const taskInput = page.locator('#taskInput');
    await expect(taskInput).toBeVisible();
    await taskInput.fill('Test Görevi: Güvenlik Raporu Hazırla');

    // Görevi ekle
    await page.locator('#taskForm button[type="submit"]').click();

    // Görevin listede olduğunu doğrula
    const taskItem = page.locator('.task-item', { hasText: 'Test Görevi: Güvenlik Raporu Hazırla' });
    await expect(taskItem).toBeVisible();

    // Tamamlandı olarak işaretle
    const checkBtn = taskItem.locator('.check-button');
    await checkBtn.click();
    await expect(taskItem).toHaveClass(/completed/);

    // Görevi sil
    const deleteBtn = taskItem.locator('.task-action.delete');
    await deleteBtn.click();
    await expect(page.locator('.task-item', { hasText: 'Test Görevi: Güvenlik Raporu Hazırla' })).toHaveCount(0);
  });

  test('2. DOM XSS Güvenlik Testi (Görev Başlığında Zararlı Yük)', async ({ page }) => {
    await page.goto(localIndexPath);

    // XSS bayrağını takip etmek için pencereye değişken bağla
    await page.evaluate(() => { window.__xss_executed = false; });

    const xssPayload = '<img src="invalid_img" onerror="window.__xss_executed=true">';
    await page.locator('#taskInput').fill(xssPayload);
    await page.locator('#taskForm button[type="submit"]').click();

    // Görevin render edilmesini bekle
    await page.waitForTimeout(500);

    // Script'in çalışıp çalışmadığını doğrula
    const isXssExecuted = await page.evaluate(() => window.__xss_executed);
    expect(isXssExecuted).toBe(false);

    // Metnin kaçırıldığını (escaped) doğrula
    const taskNameSpan = page.locator('.task-name').first();
    const innerHtml = await taskNameSpan.innerHTML();
    expect(innerHtml).toContain('&lt;img');
    expect(innerHtml).not.toContain('<img src=');
  });

  test('3. DOM XSS Güvenlik Testi (Harcama Başlığında Zararlı Yük)', async ({ page }) => {
    await page.goto(localIndexPath);

    // Finans görünümüne geç
    await page.locator('#menuButton').click();
    await page.locator('button[data-view="finance"]').click();
    await expect(page.locator('#finance-view')).toBeVisible();

    await page.evaluate(() => { window.__xss_expense_executed = false; });

    const xssPayload = '<img src=x onerror="window.__xss_expense_executed=true">';
    await page.locator('#expenseTitle').fill(xssPayload);
    await page.locator('#expenseAmount').fill('45');
    await page.locator('#financeForm button[type="submit"]').click();

    await page.waitForTimeout(500);

    const isXssExecuted = await page.evaluate(() => window.__xss_expense_executed);
    expect(isXssExecuted).toBe(false);

    // Harcama satırında kaçış kontrolü
    const expenseRow = page.locator('.expense-row strong').first();
    const innerHtml = await expenseRow.innerHTML();
    expect(innerHtml).toContain('&lt;img');
  });

  test('4. Finans ve Bütçe Fonksiyonel Testi & Hatalı Veri Girişi', async ({ page }) => {
    await page.goto(localIndexPath);
    await page.locator('#menuButton').click();
    await page.locator('button[data-view="finance"]').click();

    // Geçerli harcama ekleme
    await page.locator('#expenseTitle').fill('Market Alışverişi');
    await page.locator('#expenseAmount').fill('250');
    await page.locator('#financeForm button[type="submit"]').click();

    const expenseItem = page.locator('.expense-row', { hasText: 'Market Alışverişi' });
    await expect(expenseItem).toBeVisible();

    // Silme ve Geri Al (Undo) testi
    await expenseItem.locator('.expense-delete').click();
    const toast = page.locator('#financeToast');
    await expect(toast).toBeVisible();

    await page.locator('#undoExpense').click();
    await expect(page.locator('.expense-row', { hasText: 'Market Alışverişi' })).toBeVisible();

    // Negatif veya geçersiz tutar denemesi
    await page.locator('#expenseTitle').fill('Hatalı Negatif Girdi');
    await page.locator('#expenseAmount').fill('-100');
    await page.locator('#financeForm button[type="submit"]').click();
    
    // Negatif harcamanın listeye eklenmediğini doğrula
    await expect(page.locator('.expense-row', { hasText: 'Hatalı Negatif Girdi' })).toHaveCount(0);
  });

  test('5. Pomodoro Zamanlayıcı Mod Geçişleri', async ({ page }) => {
    await page.goto(localIndexPath);
    await page.locator('#menuButton').click();
    await page.locator('button[data-view="focus"]').click();
    await expect(page.locator('#focusView')).toBeVisible();

    // Varsayılan odak süresi (25:00)
    await expect(page.locator('#pomodoroTime')).toHaveText('25:00');

    // Study Modu (45:00)
    await page.locator('.pomodoro-mode[data-focus="45"]').click();
    await expect(page.locator('#pomodoroTime')).toHaveText('45:00');

    // Deep Work Modu (50:00)
    await page.locator('.pomodoro-mode[data-focus="50"]').click();
    await expect(page.locator('#pomodoroTime')).toHaveText('50:00');

    // Tekrar Classic moduna dönüş (25:00)
    await page.locator('.pomodoro-mode[data-focus="25"]').click();
    await expect(page.locator('#pomodoroTime')).toHaveText('25:00');
  });

  test('6. Sekmeli Defter (Notebook) Veri Kalıcılığı ve Sekme Geçişi', async ({ page }) => {
    await page.goto(localIndexPath);
    await page.locator('#menuButton').click();
    await page.locator('button[data-view="notebook"]').click();
    await expect(page.locator('#notebook-view')).toBeVisible();

    const textarea = page.locator('#notebookInput');

    // Sekme 1'e yaz
    await textarea.fill('Gizli Not 1: Proje Hedefleri');
    
    // Sekme 2'ye geç
    await page.locator('.tab-btn[data-tab="2"]').click();
    await expect(textarea).toHaveValue('');

    // Sekme 2'ye yaz
    await textarea.fill('Gizli Not 2: Finansal Plan');

    // Tekrar Sekme 1'e dön ve içeriğin korunduğunu doğrula
    await page.locator('.tab-btn[data-tab="1"]').click();
    await expect(textarea).toHaveValue('Gizli Not 1: Proje Hedefleri');
  });

  test('7. Responsive ve Mobil İzolasyon Kontrolü (Desktop vs. Mobile Viewport)', async ({ page }) => {
    // A) Desktop Viewport (1200x800)
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto(localIndexPath);

    const downloadCard = page.locator('#webDownloadCard');
    const appFooter = page.locator('#appFooter');

    await expect(downloadCard).toBeVisible();
    await expect(appFooter).toBeVisible();

    // B) Mobile Viewport (375x667 - iPhone SE)
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);

    // Mobilde bu iki alanın tamamen gizli olduğunu doğrula
    await expect(downloadCard).toBeHidden();
    await expect(appFooter).toBeHidden();
  });

  test('8. Konsol Hataları ve Sayfa Sağlığı Denetimi', async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    await page.goto(localIndexPath);
    await page.waitForTimeout(1000);

    // Menü ve görünümler arasında dolaş
    await page.locator('#menuButton').click();
    await page.locator('button[data-view="focus"]').click();
    await page.locator('#focusBack').click();

    await page.locator('#menuButton').click();
    await page.locator('button[data-view="finance"]').click();
    await page.locator('#financeBack').click();

    await page.locator('#menuButton').click();
    await page.locator('button[data-view="notebook"]').click();
    await page.locator('#notebookBack').click();

    // Kritik JS runtime hatası olmamalıdır
    expect(pageErrors).toEqual([]);
  });

});

