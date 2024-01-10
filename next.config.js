// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/, 
  });
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'], 
    // Your other Next.js configurations go here
  });

  