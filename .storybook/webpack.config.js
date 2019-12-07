const path = require("path");
const { resolve: { alias: aliases }} = require("../webpack.aliases");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
    ) {
      return {
        ...rule,
        // Remove svg
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      };
    }
    return rule;
  });

  config.module.rules.unshift({
    test: /\.svg$/,
    issuer: /\.(vue|js|ts|svg)$/,
    use: [
      "vue-loader",
      "svg-to-vue-component/loader"
    ]
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases
  };

  return config;
};
