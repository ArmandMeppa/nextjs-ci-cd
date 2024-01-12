module.exports = {
  // Your existing configuration options...

  // Add the following lines to enable static HTML export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};
