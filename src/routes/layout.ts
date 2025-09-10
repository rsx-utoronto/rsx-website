import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { onMount } from 'svelte';

export const load = async () => {
  if (browser) {
    posthog.init(
      'phc_idu7SeQKlqVqddStc6dxdH8rfCTmAr1kDRN7NvfPeqp',
      {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-05-24',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      }
    )
  }

  return
};
