import { test, expect } from '@playwright/test';

test('İki Kullanıcı Oturum İzolasyonu Kontrolü', async ({ browser }) => {
  // 1. Kullanıcı oturumu
  const user1Context = await browser.newContext();
  const page1 = await user1Context.newPage();
  await page1.goto('https://dailyflowweb.com/');

  const secretNote = 'Ahmet Özel Not: 50.000 TL Kasa';
  const noteBox = page1.getByRole('textbox', { name: /quick notes/i });
  
  if (await noteBox.isVisible()) {
    await noteBox.fill(secretNote);
  }

  // 2. Bağımsız ikinci kullanıcı oturumu
  const user2Context = await browser.newContext();
  const page2 = await user2Context.newPage();
  await page2.goto('https://dailyflowweb.com/');

  // 2. kullanıcının ekranında 1. kullanıcının verisi var mı kontrolü
  const isSecretLeaked = await page2.getByText(secretNote).isVisible();
  expect(isSecretLeaked).toBeFalsy();

  await user1Context.close();
  await user2Context.close();
});