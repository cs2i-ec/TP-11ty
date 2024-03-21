const syntaxHighlight =
    require("@11ty/eleventy-plugin-syntaxhighlight")

const tailwind = require('tailwindcss')
const postCss = require('postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssFilter = (cssCode, done) => {
    postCss([
        tailwind(require('./tailwind.config')),
        autoprefixer(),
        cssnano({ preset: 'default' })
    ])
        .process(cssCode, {
            from: './src/_includes/styles/tailwind.css'
        })
        .then(
            (r) => done(null, r.css),
            (e) => done(e, null)
        );
}

// Configuration de 11ty
module.exports = eleventyConfig => {
    //Images
    eleventyConfig.addPassthroughCopy('src/images');
    //Fonts
    eleventyConfig.addPassthroughCopy('src/fonts');


    //Syntax highlighter
    eleventyConfig.addPlugin(syntaxHighlight);

    //Tailwind
    eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
    eleventyConfig.addNunjucksAsyncFilter('postcss', postcssFilter)

    return {
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site",
        },
    }
}