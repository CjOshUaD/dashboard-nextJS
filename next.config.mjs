/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/2048-in-react",
    output: "export",  // <=== enables static exports
  reactStrictMode: true,

    experimental:{
        ppr: 'incremental',
    },
};

module.exports = nextConfig;

export default nextConfig;
