// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'ocean_home',
        remotes: {
          //NOTE - Add the remote projects here
          ocean_parent: `ocean_parent@${
            process.env.NEXT_PUBLIC_OCEAN_PARENT_URL
          }/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          //NOTE - Expose the components here
          './index': './src/pages/index.tsx',
        },
        shared: {
          //NOTE - Add the shared dependencies here
          //LINK - https://webpack.js.org/plugins/module-federation-plugin/#sharing-hints
          // recharts: {
          //   eager: true,
          //   requiredVersion: false,
          //   singleton: true,
          // },
        },
      }),
    );

    return config;
  },
};
