import { defineConfig } from 'cypress';
<<<<<<< HEAD
import { nxE2EStorybookPreset } from '@nrwl/storybook/presets/cypress';
=======
import { nxE2EStorybookPreset } from '@nx/storybook/presets/cypress';
>>>>>>> aed6ee2d2def0ac265f6d7a9d56f0d482d769200

export default defineConfig({
  e2e: nxE2EStorybookPreset(__dirname),
});
