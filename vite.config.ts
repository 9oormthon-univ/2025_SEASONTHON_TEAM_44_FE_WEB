import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif'],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@icon', replacement: path.resolve(__dirname, 'src/assets/icon') },
      { find: '@img', replacement: path.resolve(__dirname, 'src/assets/image') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@providers', replacement: path.resolve(__dirname, 'src/providers') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
    ],
  },
});
