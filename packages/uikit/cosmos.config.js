// cosmos.config.js
module.exports = {
  webpack: (config, { env }) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [...config.resolve.extensions, ".ts", ".tsx"]
    }
  }),
  port: 8990
};
