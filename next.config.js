/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    /*
     * @mux/blurhash is being used in a server component so it needs
     * to be listed here. See:
     *
     * https://beta.nextjs.org/docs/api-reference/next.config.js#servercomponentsexternalpackages
     */
    serverComponentsExternalPackages: [
      "@mux/blurhash",
    ],
  },
}

module.exports = nextConfig
