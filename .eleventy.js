module.exports = (config) => {

    config.addCollection("polaroids", (collection) =>
      collection.getFilteredByGlob("./src/polaroids/*.md")
    );
  
    config.addPassthroughCopy("src/css/");
    config.addPassthroughCopy("src/styles.css");
    config.addWatchTarget("src/styles.css");
  
    config.addPassthroughCopy("src/main.js");
    config.addPassthroughCopy("src/main.js");
    config.addWatchTarget("src/main.js");
  
    // config.addFilter("sluggyJo", function (value) {
    //   // lowercase and replace spaces with hyphens
    //   return value
    //     .toLowerCase()
    //     .replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "-");
    // });
  
    // config.addFilter("pluck", function (arr, value, attr) {
    //   return arr.filter((item) => item.data[attr] === value);
    // });
  
    // config.addFilter("groupByYear", (collection) => {
    //   return _.chain(collection)
    //     .groupBy((post) => DateTime.fromJSDate(post.date).year)
    //     .toPairs()
    //     .reverse()
    //     .value();
    // });
  
    // config.addFilter("randomItem", (collection) => {
    //   collection.sort(() => {
    //     return 0.5 - Math.random();
    //   });
    //   return collection.slice(0, 12);
    // });
  
    // const { execSync } = require("child_process");
    // config.on("eleventy.after", () => {
    //   execSync(`npx pagefind --site dist --glob \"**/*.html\"`, {
    //     encoding: "utf-8",
    //   });
    // });
  
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
  