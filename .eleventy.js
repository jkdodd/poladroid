module.exports = (config) => {
  config.addPassthroughCopy("src/styles.css");
  config.addPassthroughCopy("src/images/*.png");

  // config.addWatchTarget("src/polaroid/*.md");
  config.addWatchTarget("src/styles.css");

  // Sort by key
  function sortByKey(values, key = "pagination_pageNumber") {
    let vals = [...values];
    return vals.sort((a, b) => {
      const aVal = a?.data?.[key] ?? "";
      const bVal = b?.data?.[key] ?? "";

      // Falls es sich um Strings handelt, verwende localeCompare
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      }

      // Ansonsten gehe davon aus, dass es sich um Zahlen handelt
      return Math.sign(aVal - bVal);
    });
  }
  config.addFilter("sortByKey", sortByKey);

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
