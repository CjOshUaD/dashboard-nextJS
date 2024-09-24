/** @type {import('next').NextConfig} */

const nextConfig = {
<<<<<<< HEAD
    basePath: "/2048-in-react",
    output: "export",  // <=== enables static exports
  reactStrictMode: true,

=======
output: "export",  // <=== enables static exports
  reactStrictMode: true,
>>>>>>> 007b406c60d56855f889a8460d71797a4beac2b9
    experimental:{
        ppr: 'incremental',
    },
};

module.exports = nextConfig;

export default nextConfig;
