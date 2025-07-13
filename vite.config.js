const { resolve } = require('path'); // add this at top

module.exports = {
  base: './', // ensures Capacitor loads files locally
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html') // <== this fixes "#/index.html" error
    }
  }
};
