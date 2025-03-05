//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Configure rewrites to serve Docusaurus content under /docs
  rewrites: async () => [
    {
      source: '/docs/:path*',
      destination: '/docs/_docusaurus/:path*',
    },
  ],
  // Configure static file serving for Docusaurus assets
  async headers() {
    return [
      {
        source: '/docs/_docusaurus/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
