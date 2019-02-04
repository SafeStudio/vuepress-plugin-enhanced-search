const path = require('path')

module.exports = (options) => ({
  alias: {
    '@EnhancedSearchBox':
      path.resolve(__dirname, 'EnhancedSearchBox.vue')
  },

  define: {
    SEARCH_MAX_SUGGESTIONS: options.searchMaxSuggestions || 5,
    SEARCH_PATHS: options.test || null
  },
})
