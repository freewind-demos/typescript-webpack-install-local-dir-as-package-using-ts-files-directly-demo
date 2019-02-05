import {Configuration} from 'webpack';

const config: Configuration = {
  mode: "development",
  entry: './app.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {allowTsInNodeModules: true}
      }
    ]
  }
};

export default config;
