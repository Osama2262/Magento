import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,
  fullyParallel: false,

  reporter: 'html',

  use: {
    headless: false,
    baseURL: 'https://magento2-demo.magebit.com/',

    // Use the browser window size instead of a fixed viewport
    viewport: null,

    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chrome',
    },
  ],
});