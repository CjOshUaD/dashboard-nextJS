/** @type {import('next').NextConfig} */

const nextConfig = {
output: "export",  // <=== enables static exports
  reactStrictMode: true,
    experimental:{
        ppr: 'incremental',
    },
};

module.exports = nextConfig;

export default nextConfig;
