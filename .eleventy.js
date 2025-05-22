
module.exports = (config) => {
  
    config.addPassthroughCopy("src/styles.css");
    config.addPassthroughCopy("src/images/*.png");

    // config.addWatchTarget("src/polaroid/*.md");
    config.addWatchTarget("src/styles.css");
  
    return {
      markdownTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dir: {
        input: "src",
        includes: "_includes",
        output: "_site",
        data: "_data",
      },
    };
  };
  