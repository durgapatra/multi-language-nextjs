const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')


// when i put the language name inside localeSubpaths it will push this name in our current url otherwise it will only change but  not update in our url
const localeSubpaths = {
    zh: 'zh',
    ja:'ja',
    en:'en'
}



module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },

}

