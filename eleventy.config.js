 export default async function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat složku images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat složku css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
  }

  export const config = {
    // jako šablonu nebo soubor s obsahem
    // můžeme použít následující formáty
    templateFormats: ["njk", "html", "md"],

    // jako šablonovací jazyk zvolíme pro všechny
    // formáty výše jazyk Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
